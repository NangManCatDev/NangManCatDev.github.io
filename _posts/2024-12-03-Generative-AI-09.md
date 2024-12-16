---
layout: single
title: "Generative AI 9주차"
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

# <font color="#336699">LangChain과 RAG</font>
## <font color="#003366">LangChain</font>
- 데이터 인식: 언어모델을 다른 데이터 소스에 연결
- 에이전트 기능: 언어 모델이 환경과 상호작용 할 수 있도록 한다.
<br><br>
ex) 최근 동향을 알고 싶으면 현재 가진 데이터 소스로는 불가능, 인터넷으로 기사 등을 찾아볼 필요가 있는데, 에이전트 기능을 이용하면 내가 어떤 요청을 넘겼을 때에 그것을 기반으로 어떤 툴을 활용해야 할지를 LangChain이 알아서 결정한다. 즉, 동향을 파악하고 싶다는 요청을 하면, 인터넷 검색을 통하여 최신 동향을 가져와서 그것을 기반으로 조금 더 정제된 답변을 하는 것이 에이전트 기능이다.
<br><br>
 즉, LangChain은 언어모델을 더 잘 활용할 수 있게 도와주는 도구.
<br>

## <font color="#003366">LLM의 단점과 해결방법(지금은 대부분이 해결됨)</font>
### <font color="#003366">1. 정보 접근 제한</font>
인터넷 검색 기능이 없어, 업데이트 이후에 생긴 정보에 대해서는 답변을 하지 못하거나, 거짓된 답변을 제공한다.<br> 이는 vectorstore 기반의 정보 탐색, 혹은 Agent를 활용한 검색 결합으로 해결한다.

### <font color="#003366">2. 토큰 제한</font>
입력 토큰 제한이 존재한다(지금은 토큰 제한이 많이 확장이 되었다.).<br> 이는 TextSplitter를 활용한 문서분할로 해결한다.

### <font color="#003366">3. 환각현상(Hallucination)</font>
어떠한 사실에 대해 질문을 했을 때, 엉뚱한 대답을 하거나 거짓말을 하는 경우가 많다.<br> 이는 주어진 문서에만 답하도록 prompt를 입력하여 해결한다.
<br>

## <font color="#003366">LLM를 개량하는 방법</font>
### <font color="#003366">1. Fine-tuning</font>
기존 딥러닝 모델의 weight를 조정하여 원하는 용도의 모델로 업데이트한다.<br> 이는 다시 한번 학습을ㄹ 시켜야 해서, 고비용의 방법론이다.

#### <font color="#d83931">실습</font> <b>vast.ai에서 GPU를 빌려서 Fine-tuning 시도해보기</b>
{% include video id="d7PoWl1928A" provider="youtube" %}

### <font color="#003366">2. N-Shot Learning</font>
0개~n개의 출력 예시를 제시하여, 딥러닝이 용도에 알맞은 출력을 하도록 조정한다.

### <font color="#003366">3. In-Context Learning</font>
문맥을 제시하고, 이 문맥을 기반으로 모델이 출력하도록 조정한다.<br> <font color="#d83931">질문하고자 하는 것에 대한 정보를 주고, 그 정보를 기반으로 대답을 해달라는 것. 이것이 바로 <b>LangChain<b>이다.



## <font color="#003366">LangChain의 구조</font>
### <font color="#003366">LLM</font>
초거대 언어모델로, 생성 모델의 엔진과 같은 역할을 하는 핵심구조이다.<br>
ex: ChatGPT, PALM-2, LLAMA, etc...

### <font color="#003366">Prompt</font>
초거대 언어모델에게 지시하는 명령문<br>
ex: Prompt Template, Chat Prompt Template, Example Selectors, Output Parsers 

### <font color="#003366">Index</font>
LLM이 문서를 쉽게 탐색할 수 있도록 구조화하는 모듈<br>
ex: Document Loaders, Text Splitter, Vectorstores, Retrievers, etc...

### <font color="#003366">Memory</font>
채팅 이력을 기억하도록 하여, 이를 기반으로 대화가 가능하돌록 하는 모듈<br>
ex: Conversation Buffer Memory, Entity Memory, Conversation Knowledge Graph Memory, etc...

### <font color="#003366">Chain</font>
LLM 사슬을 형성하여, 연속적인 LLM 호출이 가능하도록 하는 핵심 구성 요소<br>
ex: LLM Chain, Question Answering, Summarization, Retrieval Question/Answering, etc...
<br>
<font color="#d83931">사용자가 prompt를 하나 주면, 그것에 대해서 출력이 하나 나오는데, 거기서 끝나는 것이 아니라 prompt를 줬을 때, 뒷단에서 Langchain이 그 prompt를 받아서 다시 한번 그 뒤의 prompt를 만들고,
그것을 다시 받아서 그 뒤의 prompt를 만들게 된다.<br> 결국에는 Chain처럼 prompt들이 연결이 되어서 내가 원하는 결과물의 질을 올리는 것이 Chain이라 보면 된다.<br></font>


### <font color="#003366">Agents</font>
LLM이 기존 Prompt Template로 수행할 수 없는 작업을 가능하게 해주는 모듈<br>
ex: Custom Agent, Custom MultiAction Agent, Conversation Agent, etc...
<br>
<font color="#d83931">Agent 자체가 중요하다는 것이 아니라, Agent에 들어가는 tool들이 굉장히 다양한데, 웹 검색이 가능하다던가, SQL Query를 작성해서 정보를 빼낸다던가 하는 것들이 가능한데,<br>
그런 여러 tool들을 LLM이 자체적으로 판단해서 구동하게끔 만드는 것이 Agents라고 보면 된다.<br></font>
<br>

## <font color="#003366">LangChain의 작동 원리</font>
<img src="/images/2024-11-25-Colab_Chatbot_PNG/RAG.jpg" width="900">
### <font color="#003366">문서 업로드(Document Loader)</font>
문서를 업로드하는 과정에서도 Lanngchain이 사용된다. 문서를 업로드 할 때, 문서 자체를 받아들이는 것이 아닌, Document Loader라는 객체를 통해 받아들이게 되면, 후에 유사도 검사를 통해 내가 알고 싶은 정보를 빼낼 때, LLM이 할 때, 이 문서에 어떤 파일에 어떤 페이지에서 가져온 정보인지 알려주는데, 이때 도움을 주는 것이 Document Loader이다.

### <font color="#003366">문서 분할(TextSplitter)</font>
ChatGPT는 토큰 제한이 있기 때문에, 문서를 통째로 주고 그것을 기반으로 대화하기는 불가능하다.<br>
그래서 긴 문서를 여러개로 분할하고, 이로 인해 어떤 질문을 했을 때에 이 문서에서 가장 유사한 부분을 찾고 그것을 기반으로 정보를 얻어낼 수 있는데, 그것을 위해 TextSplitter를 사용해 긴 문서를 여러개로 나눈다.

### <font color="#003366">문서 임베딩(Embed to Vectorstore)</font>
분할된 문서 덩어리들(Chunk)을 수치화하는 과정이 필요하다. LLM은 문자를 이해하는 것이 아니다. 따라서 문서를 수치로 바꿔줘야 이해할 수 있다.

### <font color="#003366">임베딩 검색(Vectorsote Retriever)</font>
임베딩을 통한 검색을 한다. 문서를 기반으로 GPT와 대화를 하겠다는 것은 내가 질문한 것과 가장 유사한 것, 즉 내가 질문한 것에 답이 될 수 있는 부분을 찾고, 그것을 가져와서 GPT에게 말을 시킨다고 보면 된다. 그 역할을 해주는 것이 임베딩 검색이다.

### <font color="#003366">답변 완성(QA Chain)</font>
질문을 하게 되면 가장 유사한 텍스트를 가져오고, 그것을 prompt 첫번째 것으로 만들어 내고 그것을 다시 GPT한테 준 다음에, 두 번째 prompt를 만들어 내고 다시 GPT한테 준 다음에 마지막으로 결론을 내는 형태로 답변이 완성된다.<br>

prompt가 2개가 들어가는 이유는 기본적으로 질문과 유사한 문장을 가져왔을 때에 다시 prompt로 만들어줘야 하는데, GPT한테 Fine-tuning을 시키는 것이 아니고 문서를 업로드 했다고 LLM이 전부 이해한 것이 아니기 때문에, 이 문서를 필요로 할 때마다 사용할 수 있도록 LLM에게 주는 것이다.<br> 다시 말해 질문한 것과 가장 유사한 Text를 가져와서 이것을 함께 prompt로 만들어주고 LLM에게 넘겨준다. 이로인해 LLM이 이해한다. 이것들을 또 가공해서 prompt 2를 주고, 이것을 마지막으로 원하는 형태의 결과물을 내게끔 Answer 단계로 간다.


