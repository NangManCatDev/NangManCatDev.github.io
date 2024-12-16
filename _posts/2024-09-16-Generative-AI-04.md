---
layout: single
title: "Generative AI 4주차"
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

# <font color="#336699">Neo4j</font>
- Neo4j는 그래프 데이터베이스로, 데이터를 **노드(Node)**와 **관계(Relationship)**로 표현하고 관리하는 데이터베이스이다.
- 관계형 데이터베이스(RDBMS)와 달리, 그래프 데이터베이스는 연결된 데이터를 효율적으로 저장하고 탐색하는 데 최적화되어 있다.
<br><br>

## <font color="#003366">Neo4j의 주요 개념</font>
- **노드(Node)**
  - 개체(entity)를 의미.
  - 예: 사람, 제품, 개념 등.
- **관계(Relationship)**
  - 노드 간의 연결을 표현하며, 방향성과 속성을 가질 수 있다.
  - 예: "사람 A → 구매 → 제품 B"
- **속성(Property)**
  - 노드나 관계에 부여되는 추가 정보입니다.
  - 예: 사람의 이름, 제품의 가격 등.
- **쿼리 언어(Cypher)**
  - Neo4j에서 데이터를 조회하고 조작하기 위해 사용하는 그래프 전용 쿼리 언어입니다.
  - 예:


```cypher
MATCH (p:Person)-[:KNOWS]->(f:Person)
RETURN p.name, f.name;
```

## <font color="#003366">Knowledge Injection과의 연관성</font>
- **Knowledge Injection (지식 주입)**은 AI 시스템에 명시적 지식을 추가하여 모델의 성능과 추론 능력을 향상시키는 기술이다.
- 주로 Symbolic AI나 Graph 기반의 지식을 딥러닝 모델에 결합하는 방식으로 이루어진다. 이 과정에서 Neo4j와 같은 그래프 데이터베이스가 중요한 역할을 한다.

## <font color="#003366">Neo4j가 Knowledge Injection에 활용되는 이유</font>
### <font color="#003366">1. 지식 표현</font>
- Neo4j의 노드와 관계를 이용해 복잡한 개념과 지식을 직관적으로 표현할 수 있다.
- 예:
  - 노드: 사람, 제품, 회사
  - 관계: 구매, 소속, 제작
- 이를 통해 **지식 그래프 (Knowledge Graph)**를 구축할 수 있다.

### <font color="#003366">2. 지식 탐색 및 추론</font>
- Neo4j는 그래프 탐색이 뛰어나기 때문에, AI 시스템이 필요한 정보를 빠르게 추출하고 추론할 수 있다.
- 예: AI가 "A와 B의 연결 관계"를 통해 제품 추천이나 상관관계를 추론하는 작업을 수행한다.

### <font color="#003366">3. Symbolic AI와 연결</font>
- Symbolic AI의 명시적 규칙 기반과 Neo4j의 지식 그래프를 결합해 더 강력한 추론 시스템을 구축할 수 있다.
- 예: "A라는 사람은 B 제품을 좋아한다" → "A와 유사한 성향의 C도 B 제품을 좋아할 가능성이 높다"

### <font color="#003366">4. 딥러닝 모델과 통합</font>
- Neo4j에 저장된 지식 그래프를 활용해 딥러닝 모델에 추가적인 지식 주입이 가능하다.
- 예: 그래프 기반의 관계를 학습해 Knowledge-Enhanced Embedding을 생성하고, 자연어 처리(NLP) 모델에 적용.

## <font color="#003366">활용 사례</font>
### <font color="#003366">1. RAG(Retrieval-Augumented Generation)와 결합</font>
- Neo4j를 이용해 관련된 지식을 빠르게 탐색하고, 이를 생성형 AI에 주입하는 방식이다.
- 예: 질문에 대한 답변을 생성할 때 지식 그래프에서 추가적인 정보 탐색 → 정확하고 신뢰도 높은 결과 도출.

### <font color="#003366">2. AI 추천 시스템</font>
- Neo4j의 그래프 관계를 활용해 추천 시스템을 강화.
- 예: 사용자의 행동 패턴을 노드-관계로 저장 → "유사한 행동을 보인 다른 사용자"의 패턴을 학습해 추천.

### <font color="#003366">3. 의료 분야</font>
- 환자 정보, 병원 기록, 약물 간의 관계를 그래프로 표현하여 의료 AI 시스템에 주입.
- 예: 질병 추론, 약물 추천.
<br><br>


# <font color="#336699">정리</font>
- **Neo4j**는 **그래프 데이터베이스**로, **노드와 관계**를 통해 복잡한 지식을 직관적으로 저장하고 탐색한다.
- **Knowledge Injection**에 Neo4j를 활용하면 AI 모델에 **명시적 지식**을 효율적으로 주입하고, 이를 기반으로 **추론**과 **학습**을 강화할 수 있다.
- 특히 **Symbolic AI**와 딥러닝 모델을 결합하는 데 중요한 연결 고리로 작용하며, 생성형 AI에서도 **RAG**와 같은 구조를 통해 활용도가 높다.