---
layout: single
title: "Generative AI 1주차"
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

# <font color="#336699">1. Generative AI</font>
## <font color="#003366">정의</font>
- 사진, 동영상, 텍스트 등 다양한 형태의 뎅이터를 새롭게 생성하는 AI.
- 새로운 컨텐츠를 만들어내는 인공지능을 의미하지만, 엄밀히 말하면 기존 데이터를 학습하여 새로운 패턴을 생성하는 것에 가깝다.

## <font color="#003366">특징</font>
- 데이터의 생성 및 패턴 학습에 중점을 둔다.
- 예: ChatGPT, MidJourney 등.

## <font color="#003366">반대 개념</font>
- <b>분류형(판별형) AI</b>: 데이터를 분류하거나 판별하는 AI. 예를 들어, 이미지 분류, 스팸 필터링 등.
<br><br>


# <font color="#336699">2. Symbolic AI(상징적 인공지능)</font>
## <font color="#003366">정의</font>
- 인간의 말, 언어, 수학과 같은 기호(언어) 체계를 기반으로 동작하는 AI.
- 명시적인 규칙과 논리로 구성되어 있지만, <b>학습 방식의 비효율성</b>과 <b>맥락적 이해 부족</b>으로 인해 한계를 드러냄.

## <font color="#003366">한계</font>
### <font color="#003366">1. 현실 세계 의미의 복잡성</font>
인간 언어는 모호함, 맥락 의존성, 문화적 뉘앙스로 가득 차 있고, 같은 단어라도 상황에 따ㅏ라 전혀 다른 의미를 가질 수 있다.<br> 
Symbolic AI는 이러한 맥락을 포착하고 올바르게 해석하는 데 약점을 보인다.

### <font color="#003366">2. 해석의 동적 특성</font>
현실 문제를 해결하려면 기호를 유연하게 해석하고 적용할 수 있어야 하지만, Symbolic AI는 고정된 규칙에 의존하기 때문에 이를 제대로 수행하지 못한다.

### <font color="#003366">3. 규칙의 확장성 문제</font>
모든 가능한 해석이나 상황을 아우르는 규칙을 만드는 것은 사실상 불가능하다. 규칙의 수가 늘어나면 시스템의 복잡성이 기하급수적으로 증가해 성능과 확정성에 큰 제약이 생긴다.

### <font color="#003366">4. 직관을 담아내기 어려움</font>
인간의 사고는 종종 직관, 암묵적 지식, 상식에 의존한다. 이런 요소들은 명시적인 규칙으로 만들기가 어렵기 때문에, Symbolic AI는 직관적인 판단이 중요한 영역에서 자주 실패한다.

### <font color="#003366">5. 비기호적 영역에서의 한계</font>
Symbolic AI는 수학적 증명이나 체스처럼 구조화된 문제에는 잘 작동하지만, 이미지 인식, 자연어 이해, 감각 데이터 처리와 같이 비구조화된 영역에서는 연속적인 데이터나 패턴을 다룰 수 있는 능력이 부족하다.
<br>

## <font color="#003366">기술 사용</font>
- 일부 알고리즘(예: evolutionary programming, genetic algorithm)에서 활용하지만, 메인은 아니다.
<br><br>

# <font color="#336699">3. Artificial Neural Network(ANN, 인공 신경망)</font>
## <font color="#003366">구조</font>
- 입력층(Input Layer), 은닉층(Hidden Layer), 출력층(Output Layer)으로 구성.
- 각 뉴런(Neuron)은 데이터의 특정 특징을 학습하고, 이를 조합하여 복잡한 패턴을 학습.

## <font color="#003366">Deep Learning과의 관계</font>
- **딥러닝(Deep Learning)**은 ANN의 확장된 형태로, 다층 신경망을 사용하여 데이터의 복잡한 특징을 학습.
- Generative AI와 같은 생성형 AI의 핵심 기술 중 하나.

## <font color="#003366">연구 선구자</font>
- Geoffrey Hinton(캐나다 토론토 대학교 교수): 딥러닝 연구의 선구자
- 단순히 뉴런의 구조뿐 아니라 **뉴런 간의 연결강도(Weight)**가 중요하다는 점을 강조.
<br><br>

# <font color="#336699">4. Knowledge Injection</font>
## <font color="#003366">정의</font>
- AI 모델에 외부의 지식(인간이 이해하는 방식의 정보)를 명시적으로 추가하는 방법.
- Symbolic AI의 특징을 활용하여 학습 과정을 보완하거나 효율성을 높이는 데 사용.
- 예: 모델에 사전에 정의된 규칙이나 지식 그래프를 추가하는 방식.
<br><br>

# <font color="#336699">5. 생성형 AI와 딥러닝</font>
## <font color="#003366">오해</font>
- Generative AI는 딥러닝만을 사용해서 만드는 것이 아니다.
- 다양한 알고리즘과 기법(예: 강화학습, 지식 주입, 기타 학습 모델 등)이 조합되어 동작.


# <font color="#336699">요약</font>
- **Generative AI**: 새로운 데이터를 생성하는 AI.
- **Symbolic AI**: 규칙과 기호를 기반으로 동작하지만 학습의 유연성이 부족.
- **Artificial Neural Network(ANN)**: 딥러닝의 기본 구조로, 데이터를 학습하는 데 중요한 역할.
- **Knowledge Injection**: Symbolic AI와 딥러닝의 결합 가능성을 열어주는 기술