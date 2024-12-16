---
layout: single
title: "Generative AI 7주차"
categories: GenerativeAI-report
tag: AI
typora-root-url: ../
author_profile: false
#sidebar:
#    nav: "docs"
#redirect_from:
#  - 이전 경로
---
<br>

# <font color="#336699">강의 시간에 쓸 ChatBot 미리 구현해보기(이번에는 실패한 코드만을 다룸)</font>
## <font color="#003366">GPT를 사용한 모델</font>
```python
import os
import tiktoken
from langchain.chains import ConversationalRetrievalChain
from langchain_community.chat_models import ChatOpenAI
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain.memory import ConversationBufferMemory
from langchain_community.vectorstores import FAISS
from langchain_community.callbacks.manager import get_openai_callback
import gradio as gr
from loguru import logger
from PyPDF2 import PdfReader
from langchain.schema import messages_from_dict, messages_to_dict
from dotenv import load_dotenv


# .env 파일 로드
load_dotenv()


# API Key
api_key = os.environ.get("OPENAI_API")

# 사전 학습 데이터 저장 경로
PRETRAINED_VECTORSTORE_PATH = "pretrained_faiss_index"

# 사전 학습 PDF 경로
PRETRAINED_PDF_PATH = r"C:\vscode_prj\waifu_v2\과달카날 전역 - 나무위키.pdf"


# 토큰 길이 계산
def tiktoken_len(text):
    tokenizer = tiktoken.get_encoding("cl100k_base")
    tokens = tokenizer.encode(text)
    return len(tokens)


# PDF 파일 유효성 검사
def is_valid_pdf(file_path):
    try:
        with open(file_path, "rb") as f:
            reader = PdfReader(f)
            if len(reader.pages) > 0:
                return True
    except Exception as e:
        logger.error(f"Invalid PDF: {e}")
    return False


# PDF 문서에서 텍스트 추출 및 문서 리스트 생성
def get_text(file_paths):
    doc_list = []

    for file_path in file_paths:
        logger.info(f"Processing document: {file_path}")

        if file_path.endswith(".pdf") and is_valid_pdf(file_path):
            loader = PyPDFLoader(file_path)
            documents = loader.load_and_split()
            doc_list.extend(documents)
        else:
            logger.error(f"Skipping invalid or unsupported PDF: {file_path}")

    return doc_list


# 텍스트 청크 생성
def get_text_chunks(documents):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=500, chunk_overlap=100, length_function=tiktoken_len
    )
    chunks = text_splitter.split_documents(documents)
    return chunks


# 벡터스토어 생성 및 저장
def create_and_save_vectorstore(documents, path):
    text_chunks = get_text_chunks(documents)
    embeddings = HuggingFaceEmbeddings(
        model_name="jhgan/ko-sroberta-multitask",
        model_kwargs={"device": "cpu"},
        encode_kwargs={"normalize_embeddings": True},
    )
    vectordb = FAISS.from_documents(text_chunks, embeddings)
    vectordb.save_local(path)
    logger.info(f"Vectorstore saved at {path}")
    return vectordb


# 벡터스토어 로드
def load_vectorstore(path):
    embeddings = HuggingFaceEmbeddings(
        model_name="jhgan/ko-sroberta-multitask",
        model_kwargs={"device": "cpu"},
        encode_kwargs={"normalize_embeddings": True},
    )
    # allow_dangerous_deserialization=True 추가
    return FAISS.load_local(path, embeddings, allow_dangerous_deserialization=True)


# 대화 체인 생성
def get_conversation_chain(vectorstore, openai_api_key):
    llm = ChatOpenAI(openai_api_key=openai_api_key, model_name="gpt-4", temperature=0)
    memory = ConversationBufferMemory(
        memory_key="chat_history",
        return_messages=True,
        output_key="answer",
    )
    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever(search_type="mmr", verbose=True),
        memory=memory,
        output_key="answer",
        return_source_documents=True,
        verbose=True,
    )
    return conversation_chain


# Gradio UI 동작 함수
def response_with_rag_and_history(docs, user_input, system_prompt, chat_history):
    openai_api_key = api_key
    global pretrained_vectorstore  # 사전 학습된 벡터스토어 사용
    if docs:
        documents = get_text([doc.name for doc in docs])
        if documents:
            # 사용자 PDF 데이터를 기존 벡터스토어에 통합
            user_vectorstore = create_and_save_vectorstore(
                documents, "temp_faiss_index"
            )
            pretrained_vectorstore.merge_from(user_vectorstore)

    # 대화 체인 생성
    conversation_chain = get_conversation_chain(pretrained_vectorstore, openai_api_key)

    # 시스템 프롬프트와 사용자 입력 추가
    inputs = {"question": user_input, "chat_history": chat_history}
    if system_prompt:
        inputs["system_prompt"] = system_prompt

    # OpenAI API 호출 및 응답
    try:
        with get_openai_callback() as callback:
            response = conversation_chain(inputs)
            assistant_response = response["answer"]

            # Gradio Chatbot 요구사항에 맞게 chat_history 업데이트
            chat_history.append({"role": "user", "content": user_input})
            chat_history.append({"role": "assistant", "content": assistant_response})

            return assistant_response, chat_history
    except Exception as e:
        logger.error(f"Error during OpenAI API call: {e}")
        return str(e), chat_history


# Gradio UI 설정
with gr.Blocks() as demo:
    gr.Markdown("## RAG 챗봇 (사전 학습 + 사용자 추가 PDF 분석)")

    # PDF 업로드
    pdf_input = gr.File(
        label="PDF 파일 업로드 (선택)", file_types=[".pdf"], file_count="multiple"
    )
    system_prompt = gr.Textbox(
        label="System Prompt", placeholder="시스템 프롬프트는 선택사항입니다."
    )
    user_input = gr.Textbox(label="질문 입력", placeholder="질문을 입력하세요.")
    chatbot = gr.Chatbot(label="대화 기록", elem_id="chat_history", type="messages")
    state = gr.State([])  # 대화 기록을 저장할 상태
    output = gr.Textbox(label="응답", lines=5)

    # 버튼
    generate_btn = gr.Button("응답 생성")
    generate_btn.click(
        response_with_rag_and_history,
        inputs=[pdf_input, user_input, system_prompt, state],
        outputs=[output, chatbot],
    )

# 사전 학습된 벡터스토어 로드
if os.path.exists(PRETRAINED_VECTORSTORE_PATH):
    pretrained_vectorstore = load_vectorstore(PRETRAINED_VECTORSTORE_PATH)
else:
    # 사전 학습 데이터를 생성하고 저장 (초기 실행 시 필요)
    logger.info(f"Creating vectorstore from {PRETRAINED_PDF_PATH}")
    pretrained_documents = get_text([PRETRAINED_PDF_PATH])  # 경로 문자열로 전달
    pretrained_vectorstore = create_and_save_vectorstore(
        pretrained_documents, PRETRAINED_VECTORSTORE_PATH
    )

demo.launch()
```
<br><br>


## <font color="#003366">Ollama를 사용한 모델(실습에서는 Evee를 사용하였음)</font>
**[Evee 모델에 대한 정보](https://fornewchallenge.tistory.com/entry/AI-%EB%85%BC%EB%AC%B8-%EC%98%AC%ED%95%B4%EC%9D%98-%ED%95%9C%EA%B5%AD%EC%96%B4-LLM%EC%97%90-%EC%84%A0%EC%A0%95%EB%90%9C-%EC%95%BC%EB%86%80%EC%9E%90-%EC%96%B8%EC%96%B4-%EB%AA%A8%EB%8D%B8-EEVE)**
<br>

```python
import os
import tiktoken
from langchain.chains import ConversationalRetrievalChain
from langchain_ollama import OllamaLLM
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain.memory import ConversationBufferMemory
from langchain_community.vectorstores import FAISS
import gradio as gr
from loguru import logger
from PyPDF2 import PdfReader

# 사전 학습 데이터 저장 경로
PRETRAINED_VECTORSTORE_PATH = "pretrained_faiss_index"

# 사전 학습 PDF 경로
PRETRAINED_PDF_PATH = r"C:\vscode_prj\Lecture_llm\pdfs\건강검진 결과지 제대로 읽는 법 - 당신의 건강가이드 헬스조선.pdf"


# 토큰 길이 계산
def tiktoken_len(text):
    tokenizer = tiktoken.get_encoding("cl100k_base")
    tokens = tokenizer.encode(text)
    return len(tokens)


# PDF 파일 유효성 검사
def is_valid_pdf(file_path):
    try:
        with open(file_path, "rb") as f:
            reader = PdfReader(f)
            if len(reader.pages) > 0:
                return True
    except Exception as e:
        logger.error(f"Invalid PDF: {e}")
    return False


# PDF 문서에서 텍스트 추출 및 문서 리스트 생성
def get_text(file_paths):
    doc_list = []

    for file_path in file_paths:
        logger.info(f"Processing document: {file_path}")

        if file_path.endswith(".pdf") and is_valid_pdf(file_path):
            loader = PyPDFLoader(file_path)
            documents = loader.load_and_split()
            doc_list.extend(documents)
        else:
            logger.error(f"Skipping invalid or unsupported PDF: {file_path}")

    return doc_list


# 텍스트 청크 생성
def get_text_chunks(documents):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000, chunk_overlap=100, length_function=tiktoken_len
    )
    chunks = text_splitter.split_documents(documents)
    return chunks


# 벡터스토어 생성 및 저장
def create_and_save_vectorstore(documents, path):
    text_chunks = get_text_chunks(documents)
    embeddings = HuggingFaceEmbeddings(
        model_name="jhgan/ko-sroberta-multitask",
        model_kwargs={"device": "cpu"},
        encode_kwargs={"normalize_embeddings": True},
    )
    vectordb = FAISS.from_documents(text_chunks, embeddings)
    vectordb.save_local(path)
    logger.info(f"Vectorstore saved at {path}")
    return vectordb


# 벡터스토어 로드
def load_vectorstore(path):
    embeddings = HuggingFaceEmbeddings(
        model_name="jhgan/ko-sroberta-multitask",
        model_kwargs={"device": "cpu"},
        encode_kwargs={"normalize_embeddings": True},
    )
    # allow_dangerous_deserialization=True 추가
    return FAISS.load_local(path, embeddings, allow_dangerous_deserialization=True)


# 대화 체인 생성
def get_conversation_chain(vectorstore, system_prompt=None):
    # Ollama LLM 설정
    llm = OllamaLLM(
        model="evee:latest",
        system_prompt=system_prompt,
        temperature=0.7,
        max_tokens=4096,
    )
    memory = ConversationBufferMemory(
        memory_key="chat_history",
        return_messages=True,
        output_key="answer",  # 메모리에 저장할 출력 키 명시
    )

    # ConversationalRetrievalChain 생성
    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        retriever=vectorstore.as_retriever(search_type="mmr", verbose=True),
        memory=memory,
        chain_type="stuff",  # 기본 체인 타입
        return_source_documents=True,
        verbose=True,
    )

    return conversation_chain


# Gradio UI 동작 함수
def response_with_rag_and_history(docs, user_input, chat_history):
    global pretrained_vectorstore
    system_prompt = """
        역할:
        당신은 숙련된 내과 의사입니다. 사용자가 건강검진 결과 PDF를 업로드하면, 그 내용을 분석하고 해당 데이터를 바탕으로 의료 소견을 제공합니다.

        목표:
        건강검진 결과에서 중요한 지표(예: 혈압, 혈당, 콜레스테롤, 간 수치 등)를 추출합니다. 각 지표의 정상 범위를 기준으로 결과를 해석하고, 수치가 정상, 경계, 또는 비정상인지 판단합니다. 비정상적인 수치가 있는 경우, 그와 관련된 잠재적인 건강 문제를 설명합니다. 사용자가 추가로 확인해야 할 검사나 생활습관 개선에 대한 실질적인 조언을 제공합니다. 결과가 불충분하거나 모호한 경우, 사용자에게 의사와 직접 상담할 것을 권장합니다.

        제약:
        사용자의 의료 정보를 비공개로 유지하고, 사용자가 제공한 정보만을 바탕으로 분석합니다. 진단이나 치료를 직접 제안하지 않으며, 소견과 권장사항만 제공합니다. 항상 "추가적인 의학적 조언은 담당 의사와 상담하십시오."라는 문구를 포함합니다.


        출력 형식:
        종합 소견: 건강검진 결과 요약과 주요 소견.
        상세 분석: 지표별 분석 (예: 혈압, 혈당 등).
        권장 사항: 생활습관 조정, 추가 검사 필요성 등.
        주의사항: 추가적인 상담 필요성 강조.
    """  # 시스템 프롬프트 하드코딩

    if docs:
        documents = get_text([doc.name for doc in docs])
        if documents:
            user_vectorstore = create_and_save_vectorstore(
                documents, "temp_faiss_index"
            )
            pretrained_vectorstore.merge_from(user_vectorstore)

    conversation_chain = get_conversation_chain(
        pretrained_vectorstore, system_prompt=system_prompt
    )

    # 검색된 청크 확인
    retriever = pretrained_vectorstore.as_retriever(search_type="mmr", verbose=True)
    docs = retriever.get_relevant_documents(user_input)

    # 터미널에 검색된 청크 출력
    logger.info(f"Retrieved {len(docs)} relevant chunks:")
    for i, doc in enumerate(docs, 1):
        logger.info(f"Chunk {i}: {doc.page_content}")

    # 검색된 문서와 함께 질문 전달
    try:
        response = conversation_chain(
            {"question": user_input, "chat_history": chat_history}
        )
        assistant_response = response["answer"]

        # 디버깅: LLM 응답 확인
        logger.info(f"LLM Response: {assistant_response}")

        chat_history.append({"role": "user", "content": user_input})
        chat_history.append({"role": "assistant", "content": assistant_response})

        return assistant_response, chat_history
    except Exception as e:
        logger.error(f"Error during model interaction: {e}")
        return str(e), chat_history


# Gradio UI 설정
with gr.Blocks() as demo:
    gr.Markdown("## RAG 챗봇 (OllamaLLM)")

    pdf_input = gr.File(
        label="PDF 파일 업로드", file_types=[".pdf"], file_count="multiple"
    )
    user_input = gr.Textbox(label="질문 입력", placeholder="질문을 입력하세요.")
    chatbot = gr.Chatbot(label="대화 기록", elem_id="chat_history", type="messages")
    state = gr.State([])  # 대화 기록 저장
    output = gr.Textbox(label="응답", lines=5)

    generate_btn = gr.Button("응답 생성")
    generate_btn.click(
        response_with_rag_and_history,
        inputs=[pdf_input, user_input, state],
        outputs=[output, chatbot],
    )

if os.path.exists(PRETRAINED_VECTORSTORE_PATH):
    pretrained_vectorstore = load_vectorstore(PRETRAINED_VECTORSTORE_PATH)
else:
    logger.info(f"Creating vectorstore from {PRETRAINED_PDF_PATH}")
    pretrained_documents = get_text([PRETRAINED_PDF_PATH])
    pretrained_vectorstore = create_and_save_vectorstore(
        pretrained_documents, PRETRAINED_VECTORSTORE_PATH
    )

demo.launch()
```


## <font color="#003366">문제점</font>
- 해당 코드는 pretrained 부분이 제대로 작동하지 않음.
- 추후에 수정할 예정