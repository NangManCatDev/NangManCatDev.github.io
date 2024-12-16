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


