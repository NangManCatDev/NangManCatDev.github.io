---
layout: single
title: "Generative AI 2주차"
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

# <font color="#336699">AI의 이론 및 개념</font>
## <font color="#003366">AI의 핵심 이론</font>
### <font color="#003366">1. Search(탐색)</font>
- **정의**: 주어진 문제의 해결책을 찾기 위해 상태 공간을 탐색하는 과정.
- **주요 기법**:
  - **Blind Search(맹목적 탐색)**: 해를 찾을 때, 규칙이나 정보를 활용하지 않는 탐색(예: BFS, DFS)
  - **Informed Search(정보 기반 탐색)**: 휴리스틱 함수를 사용해 효율적으로 탐색(예: A* 알고리즘)
- **응용**:
  - **퍼즐 문제(8-puzzle, N-Queens)**
  - **경로 탐색(네비게이션, 로봇 경로 계획)**

### <font color="#003366">2. Knowledge Representation & Reasoning(KR&R, 지식 표현 및 추론)</font>
- **정의**:
  - **지식 표현**: 인간의 지식을 컴퓨터가 이해하고 처리할 수 있는 형태로 표현.
  - **추론**: 기존 지식에서 새로운 지식을 도출하는 과정.
- **주요 방법**:
  - **Logic(논리)**: 명제 논리, 술어 논리를 기반으로 한 지식 표현 및 추론.
  - **Production Rule(생산 규칙)**: "If-Then" 규칙을 활용한 지식 표현.
  - **Semantic Network(의미망)**: 개념 간의 관계를 그래프로 표현.
  - **Frame**: 객체 지향적 표현으로 속성과 관계를 구조화함.
- **응용**
  - **전문가 시스템(Expert System)**
  - **의사결정 시스템**

### <font color="#003366">3. Planning(계획)</font>
- **정의***: 목표를 달성하기 위해 최적의 행동 순서를 생성하는 과정
- **주요 방법**:
  - **상태 공간 기반 계획**
  - **계층적 계획(Hierarchical Task Network, HTN)**
- **응용**:
  - **로봇의 경로 계획(Path Planning)**
  - **작업 스케쥴링**

### <font color="#003366">4. Learning(학습)</font>
- **정의**: 데이터를 통해 AI가 스스로 패턴을 학습하고 성능을 개선하는 과정.
- **주요 학습 방법**:
  - **지도 학습**: 입력과 출력 데이터를 통해 학습(예: 이미지 분류).
  - **비지도 학습**: 데이터의 숨겨진 패턴을 찾음(예: 클러스터링).
  - **강화 학습**: 보상과 벌점을 기반으로 학습(예: AlphaGo).
- **응용**:
  - **머신러닝 모델 훈련**
  - **추천 시스템**

### <font color="#003366">5. Uncertainty(불확실성)</font>
- **정의**: 불완전하거나 모호한 정보를 다루는 방법.
- **주요 기법**:
  - **확률적 추론(Bayesian Networks)**
  - **퍼지 논리(Fuzzy Logic)**
- **응용**:
  - **의료 진단 시스템**
  - **날씨 예측 모델**

