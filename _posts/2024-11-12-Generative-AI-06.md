---
layout: single
title: "Generative AI 6주차"
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
- 해당 코드는 colab을 사용하여 만들어졌음

```python
import gradio as gr
from langchain.chat_models import ChatOpenAI
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA
import tiktoken
from langchain.schema import SystemMessage, HumanMessage, AIMessage
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS

from google.colab import drive
drive.mount('/content/drive')

# OpenAI API 키 설정
api_key = ""  # 본인의 OpenAI API 키로 변경

# LLM 모델 초기화
llm = ChatOpenAI(temperature=0.7, model="gpt-4", openai_api_key=api_key)

# 사전 학습용 PDF 경로
initial_pdf_path = "/content/drive/MyDrive/chatbot/과달카날 전역 - 나무위키.pdf"

# 글로벌 변수로 벡터 스토어 설정
vector_store = None

# 한국어 HuggingFace 임베딩 생성
model_name = "jhgan/ko-sbert-nli"
ko_embeddings = HuggingFaceEmbeddings(
    model_name=model_name,
    model_kwargs={'device': 'cpu'},
    encode_kwargs={'normalize_embeddings': True}
    )

# PDF 처리 및 벡터화 함수
def process_pdf(file, initial=False):
    global vector_store
    try:
        loader = PyPDFLoader(file)
        documents = loader.load()
    except Exception as e:
        return f"PDF 로드 중 에러 발생: {str(e)}"

    # 텍스트 분할
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,  # 각 텍스트 조각의 최대 길이
        chunk_overlap=100,  # 조각 간 중복 길이
        separators=["\n\n", "\n", " ", ""],  # 분할 기준 순서 (문단, 줄바꿈, 공백)
    )
    texts = text_splitter.split_documents(documents)

    # FAISS를 사용한 벡터화
    try:
        embeddings = ko_embeddings  # HuggingFace 한국어 임베딩 사용
        if initial or vector_store is None:
            # 초기화 또는 첫 번째 PDF 학습 시 새로 생성
            vector_store = FAISS.from_documents(texts, embeddings)
        else:
            # 기존 벡터 스토어에 새 텍스트 추가
            vector_store.add_documents(texts)
        return "PDF가 성공적으로 학습되었습니다."
    except Exception as e:
        return f"벡터화 중 에러 발생: {str(e)}"

# 초기 PDF 학습
print("사전 학습 중...")
initial_result = process_pdf(initial_pdf_path, initial=True)
if "에러 발생" in initial_result:
    print(f"초기 PDF 학습 실패: {initial_result}")
else:
    print("초기 PDF 학습 완료!")


# 응답 생성 함수
def response_with_rag_and_history(pdf_file, user_input, system_prompt, history):
    global vector_store

    # 시스템 프롬프트 추가
    history_langchain_format = [SystemMessage(content=system_prompt)] if system_prompt else []

    # 대화 기록 추가
    for human, ai in history:
        history_langchain_format.append(HumanMessage(content=human))
        history_langchain_format.append(AIMessage(content=ai))

    # PDF가 업로드된 경우 처리 및 학습
    if pdf_file is not None:
        try:
            process_result = process_pdf(pdf_file.name)
            if "에러 발생" in process_result:
                return process_result, history
        except Exception as e:
            return f"PDF 처리 중 에러 발생: {str(e)}", history

    # RAG 기반 응답
    if vector_store:
        try:
            retriever = vector_store.as_retriever()
            qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)
            pdf_response = qa_chain.run(user_input)
            history.append((user_input, pdf_response))
            return f"PDF에서 검색한 응답: {pdf_response}", history
        except Exception as e:
            return f"RAG 응답 생성 중 에러 발생: {str(e)}", history

    # 일반 GPT 응답
    try:
        history_langchain_format.append(HumanMessage(content=user_input))
        gpt_response = llm(history_langchain_format)
        history.append((user_input, gpt_response.content))
        return f"ChatGPT 응답: {gpt_response.content}", history
    except Exception as e:
        return f"ChatGPT 응답 생성 중 에러 발생: {str(e)}", history

# Gradio UI 설정
with gr.Blocks() as demo:
    gr.Markdown("## RAG 챗봇 (사전 학습 + 추가 학습)")

    # PDF 업로드
    pdf_input = gr.File(label="PDF 파일 업로드 (선택)", file_types=[".pdf"])
    system_prompt = gr.Textbox(label="System Prompt", placeholder="시스템 프롬프트는 선택사항입니다.")
    user_input = gr.Textbox(label="질문 입력", placeholder="질문을 입력하세요.")
    chatbot = gr.Chatbot(label="대화 기록")
    state = gr.State([])  # 대화 기록을 저장할 상태
    output = gr.Textbox(label="응답", lines=5)

    # 버튼
    generate_btn = gr.Button("응답 생성")
    generate_btn.click(
        response_with_rag_and_history,
        inputs=[pdf_input, user_input, system_prompt, state],
        outputs=[output, chatbot],
    )

demo.launch()

```


## <font color="#003366">문제점</font>
- 해당 코드는 pretrained 부분이 없음
- 해당 코드는 pdf 파일이 클 시에 에러가 발생
- 추후에 수정 예정