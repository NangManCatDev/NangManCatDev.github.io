# 개요

- 대형 LLM(ChatGPT, Gemini 등) 대비 로컬 모델이 특정 과제에서 더 우수한 성능을 갖추도록 설계하는 연구
- 아래 7개 주제에 대해 각 문제의 정의, SOTA(State Of The Art) 기술, 연구 설계 방안, 그리고 로컬 모델 기반으로 성능 우위를 확보할 수 있는 조건을 중심으로 정리

---

 

## 1. 스토리 이해 능력 (TREC-10, 인과 추론 포함)

### 문제 정의

현재의 LLM은 GPT 계열을 포함해 다양한 언어 이해 작업에서 높은 성능을 보이고 있으나,

**이야기(story) 구조에 내재된 인과성 이해**—즉, 등장인물, 사건 간 관계, 시간 순서, 원인과 결과의 연결—에 대해서는

**일관되고 정확한 해석을 제공하는 데 한계를 보인다.**

예를 들어,

“거북이가 이긴 이유는?”이라는 질문은 단순한 사실 회상이 아닌,

이야기의 구조(경주 → 자만 → 느리지만 꾸준함 → 승리)에 대한 인과적 추론을 요구한다.

그러나 LLM은 "거북이는 빠르기 때문"과 같은 **문맥 탈락/상식 위반 응답**을 생성할 수 있다.

이러한 오류는 **스토리 길이와 관계없이 발생**하며,

이는 LLM이 아직 **내재적 인과성에 대한 명시적 표현 없이 추론하는 능력이 제한적임을 시사한다.**

### 대표 기술/논문(SOTA)

| 모델/방법 | 논문 제목 | 연도 | 분야 | 주요 기여 요약 | 문제 해결 방식 요약 | 출처 |
| --- | --- | --- | --- | --- | --- | --- |
| Self-Ask with Search | Measuring and Narrowing the Compositionality Gap in Language Models | 2022 | 인과적 복합 질의 분해 | 복잡한 질문을 하위 질문으로 나누어 외부 검색과 결합 | 인과 구조를 명시적으로 나누는 "질문 분해 + 외부 검색" 방식 | [arXiv:2210.03350](https://arxiv.org/abs/2210.03350) |
| QA-GNN (aka RAT-SQL + GNN-QA) | QA-GNN: Reasoning with Language Models and Knowledge Graphs for Question Answering | 2021 | Structured QA + Graph Reasoning | 문장 간 인과 관계를 그래프 구조로 학습하여 reasoning 수행 | 문장/사건의 논리적 연결을 그래프 구조로 추론 | [arXiv:2104.06378](https://arxiv.org/abs/2104.06378) |
| UnifiedSKG | UnifiedSKG: Unifying and Multi-Tasking Structured Knowledge Grounding with Text-to-Text Language Models | 2022 | Structured Knowledge Grounded QA | 다양한 schema-guided QA task를 통합 처리 | 구조적 지식 추출 프레임워크로 스토리 구조를 명시적으로 라벨링 | [arXiv:2201.05966](https://arxiv.org/abs/2201.05966) |
| STaR: Self-Taught Reasoner | STaR: Bootstrapping Reasoning With Reasoning | 2022 | Chain-of-Thought + 자기 지도 학습 | CoT 생성 자체를 모델이 학습하여 reasoning 강화 | 추론 과정을 생성-학습하며, 중간 사고 경로를 모델이 스스로 구성 | [arXiv:2203.14465](https://arxiv.org/abs/2203.14465) |
| RRHF (Rank Response w/ Feedback) | Rank Responses to Align Language Models with Human Feedback | 2023 | Alignment / Preference Tuning | 인과 추론 응답을 human preference로 fine-tune | 사람이 더 좋은 답을 선택함으로써 LLM 응답의 일관성과 사실성 개선 | [arXiv:2304.05302](https://arxiv.org/abs/2304.05302) |
| REBEL + T5 | REBEL: Relation Extraction By End-to-end Language generation | 2020 | Relation Extraction | 스토리 내 관계 및 인과 정보 추출에 최적화된 사전학습 구조 | 텍스트 내 인물-행동-결과 구조를 triplet로 추출하여 인과 정보 구조화 | [ACL Anthology](https://aclanthology.org/2020.coling-main.571/) |

[Measuring and Narrowing the Compositionality Gap in Language Models](https://www.notion.so/Measuring-and-Narrowing-the-Compositionality-Gap-in-Language-Models-1e9f83c6576e806ab971ce6209230797?pvs=21)

[QA-GNN: Reasoning with Language Models and Knowledge Graphs for Question Answering](https://www.notion.so/QA-GNN-Reasoning-with-Language-Models-and-Knowledge-Graphs-for-Question-Answering-1e9f83c6576e80e79d96da22da81b534?pvs=21)

[UnifiedSKG: Unifying and Multi-Tasking Structured Knowledge Grounding with Text-to-Text Language Models](https://www.notion.so/UnifiedSKG-Unifying-and-Multi-Tasking-Structured-Knowledge-Grounding-with-Text-to-Text-Language-Mod-1e9f83c6576e80d7a016f93cab2eed35?pvs=21)

### 연구 설계 방안

### 유의점

---

## 2. 수학 개념 이해 (LLM + LCM 활용)

### 문제 정의

현재의 LLM은 GPT 계열을 포함해 다양한 수학 문제에서 높은 정답률을 보이지만,

**수학 개념 그 자체에 대한 구조적 이해**—예: 덧셈이란 무엇인가, 미분의 의미, 짝수의 성질—에 대해서는

**기호적 처리 수준에 머무르며, 개념적·추론적 응용에는 한계를 보인다.**

예를 들어,

“짝수 + 짝수는 왜 짝수인가?”라는 질문은 단순한 계산이 아닌,

짝수의 정의(2로 나누어떨어짐) → 대수적 표현(2n + 2m) → 구조적 결론(2(n+m) → 짝수)이라는 **개념의 논리적 전개**를 요구한다.

그러나 LLM은 "짝수는 짝수니까요"와 같은 **순환적 설명** 또는 **자주 등장한 문장 조합을 그대로 재생산**하는 응답을 보일 수 있다.

이는 LLM이 기본적으로 **통계 기반 확률 생성 모델**이라는 구조적 한계에서 비롯된다

이처럼, 모델은 수학 개념의 정의와 구조를 "이해"하는 것이 아니라

단지 **자주 함께 등장하는 패턴을 확률적으로 생성**할 뿐이며,

그 결과, 수학 개념에 대한 **연역적 설명**, **논리적 추론**, **개념 일반화**에는 **근본적인 한계**를 드러낸다.

이는 문제의 난이도와 무관하게 발생하며,

LLM이 아직 **수학 개념을 의미론적 구조로 명시적 모델링하거나 추론하는 능력**에 제한이 있음을 시사한다.

### 대표 기술/논문(SOTA)

| 모델/방법 | 논문 제목 | 연도 | 분야 | 주요 기여 요약 | 문제 해결 방식 요약 | 출처 |
| --- | --- | --- | --- | --- | --- | --- |
| GSM-Symbolic | GSM-Symbolic: Assessing LLMs’ Symbolic Reasoning Abilities on Diverse Math Problems | 2024 | Symbolic Math Reasoning Benchmark | 다양한 유형의 수학 문제를 구조적으로 재구성한 벤치마크 제안 | 수학 문제를 표현 방식별로 변형하여 개념 일반화 능력 측정 | [arXiv:2410.05229](https://arxiv.org/abs/2410.05229) |
| NeuroSymbolic LLM | NeuroSymbolic LLMs: Enhancing Mathematical Reasoning via Symbolic Induction | 2024 | Neuro-Symbolic Reasoning | LLM의 추론 결과를 기호 기반 벡터로 전환하여 연역적 추론 가능 | LLM + 논리적 규칙 기반 기호 추론 결합 | [arXiv:2502.01657](https://arxiv.org/abs/2502.01657) |
| CoR-Math (Chain-of-Reasoning) | Chain-of-Reasoning: A Multi-Paradigm Reasoning Framework for Mathematical Theorem Proving | 2024 | Multi-Modal Mathematical Reasoning | 자연어, 알고리즘, 기호 추론을 결합한 프레임워크 제안 | 다양한 추론 방식 통합 → IMO 수준 문제 해결 향상 | [arXiv:2501.11110](https://arxiv.org/abs/2501.11110) |
| AlphaGeometry | AlphaGeometry: Learning to Prove Theorems via LLM + Deductive Engine | 2024 | Geometry Theorem Proving | 인간 금메달리스트 수준의 기하학 문제 풀이 모델 | LLM이 구조 유도, 증명은 기호 추론기로 완성 | [Wired](https://www.wired.com/story/google-deepmind-alphaproof-ai-math/) |
| CoMAT | CoMAT: Chain of Mathematically Annotated Thought | 2024 | Symbolic Chain-of-Thought | 자연어 → 기호 표현으로 수학 문제 변환 후 추론 | 기호 체인 생성 + 수학적 신뢰도 향상 | [arXiv:2410.10336](https://arxiv.org/abs/2410.10336) |

### 연구 설계 방안

### 유의점

---

## 3. 안다/모른다를 구분하기

### 문제 정의

현재의 LLM은 GPT 계열을 포함해 다양한 질문에 대해 **정답처럼 보이는 응답**을 생성할 수 있으며,

이는 문법적으로 완전하고 자연스러운 문장을 기반으로 **신뢰감을 유도**한다.

그러나 이러한 응답의 상당수는 **사실 근거 없이 생성된 'hallucination'일 가능성**이 있으며,

LLM은 **“자신이 모른다”는 사실을 명시적으로 인식하거나 고백하지 못하는 구조적 한계**를 갖는다.

예를 들어,

실제 존재하지 않는 논문이나 문서를 인용하는 질문에 대해서도,

모델은 "존재할 법한" 제목, 저자, 학회 정보를 조합해 응답을 생성할 수 있다.

이러한 응답은 실제 지식을 바탕으로 한 것이 아니라,

**통계적으로 자주 함께 등장한 단어 패턴의 생성 결과**이며,

모델이 **지식의 소유 여부를 평가하거나 불확실성을 감지하는 메타인지적 판단 구조**를 갖지 않음을 보여준다.

즉, 현재의 LLM은 정보의 존재 여부나 근거 유무에 대한 **내적 판단 능력** 없이

단지 확률적으로 그럴듯한 문장을 출력할 뿐이며,

그 결과 **‘모른다’고 응답하는 능력**, **불확실한 지식에 대한 회피 전략**,

**정확성 판단에 기반한 응답 통제**에 **근본적인 한계**를 드러낸다.

이는 문제의 복잡성과 무관하게 발생하며,

모델이 **지식의 불확실성**을 명시적으로 **인식하고 반응할 수 있는 능력 부족**을 시사한다.

### 대표 기술/논문(SOTA)

| 모델/방법 | 논문 제목 | 연도 | 분야 | 주요 기여 요약 | 문제 해결 방식 요약 | 출처 |
| --- | --- | --- | --- | --- | --- | --- |
| Reflexion | Reflexion: Language Agents with Verbal Reinforcement Learning | 2023 | Self-Reflection 기반 AI | LLM이 스스로 응답에 대해 반성하고 수정하는 능력을 부여 | 자기피드백 루프를 통해 오류 감지 및 회피 응답 유도 | [ICLR 2023](https://arxiv.org/abs/2303.11366) |
| SelfCheckGPT | SelfCheckGPT: Detecting Hallucinations in LLMs via Self-Consistency | 2023 | Hallucination 탐지 | 동일 질문 반복 생성 → 응답 간 불일치 탐지 → 허위 응답 판단 | 다수응답 간 일관성 분석으로 확신도 추정 | [NeurIPS 2023](https://arxiv.org/abs/2305.05796) |
| TrustGPT | TrustGPT: Leveraging Retrieval and Chain-of-Thought for Trustworthy LLMs | 2023 | 신뢰도 판단 | 응답 전후 Retrieval 결과 기반으로 신뢰 점수 산출 및 회피 | CoT + RAG 기반으로 정확성 부족 시 “모름” 응답 유도 | [arXiv:2307.16821](https://arxiv.org/abs/2307.16821) |
| Knowledge Attribution | Locating and Editing Factual Knowledge in GPT | 2022 | 내부 지식 추적 | 특정 사실이 LLM 내부에 있는지 여부를 neuron-level로 추적 | “알고 있는지 여부”를 모델 내부에서 해석 가능 | [ICML 2022](https://arxiv.org/abs/2202.05262) |
| Ask Me Anything (AMA) | Ask Me Anything: A Simple Strategy for Prompting Language Models | 2022 | RAG + 회피 응답 | LLM이 모를 경우, 외부 검색 결과를 사용하거나 회피 | 검색 실패 시 ‘모른다’ 유도 | [TACL 2022](https://arxiv.org/abs/2212.10529) |
| Entropy-based Filtering | - | - | 확신도 추정 | Softmax 엔트로피, logit 차이 등을 통해 불확실성 수치화 | Threshold 이상 확신 없을 경우 응답 차단 | - |

### 연구 설계 방안

### 유의점

---

## 4. AI 캐릭터성 부여 (말투, 성격 등)

### 문제 정의

현재의 LLM은 GPT 계열을 포함해 다양한 스타일로 대화하는 능력을 갖고 있으며,

이는 말투, 감정, 성격 등을 지정함으로써 **마치 특정 인격을 가진 존재처럼 보이게 만드는 효과**를 낳는다.

그러나 이러한 캐릭터 표현은 **지속성과 일관성 면에서 취약한 구조적 한계**를 갖는다.

예를 들어,

처음에는 “친절하고 공손한 상담사” 말투로 응답하던 모델이,

몇 차례의 대화 이후에는 **무표정하고 기계적인 말투**,

혹은 **초기 설정과 무관한 어투**로 돌아서는 사례가 흔히 발생한다.

이는 모델이 **자신의 말투나 인격 설정을 장기적으로 유지하거나 자기 점검하는 능력**,

즉 **캐릭터의 일관성을 유지하기 위한 메타 레벨의 관리 구조를 갖고 있지 않음**을 보여준다.

이러한 현상은 단순한 말투 변화뿐만 아니라,

- 감정 표현의 부조화,
- 인격적 설정(예: 낙천적, 조언자, 까칠함)의 붕괴,
- 페르소나 간 혼동 및 전이 등에서도 나타나며,

사용자 경험에 혼란을 야기한다.

즉, 현재의 LLM은 **말투, 감정, 성격 등의 설정을 장기적으로 유지하고 인지하는 능력**,

또는 **대화 중 그 설정이 흐트러졌는지를 자가진단하고 조정할 수 있는 메타인지적 제어 능력**이 부족하다.

그 결과, **“특정한 말투와 감정을 일관되게 유지하며 대화하는 능력”**은

프롬프트 기반의 일회성 설정으로는 불충분하며,

**대화 흐름 내 지속적 유지와 자기점검 메커니즘**의 부재라는 **구조적 한계**가 존재한다.

이는 단순한 캐릭터 디자인의 문제가 아니라,

**대화 인격의 일관성과 신뢰성 확보를 위한 근본적 기술 과제**를 시사한다.

### 대표 기술/논문(SOTA)

### 대표 기술/논문(SOTA): "AI가 특정 말투나 감정을 일관되게 유지하는 문제"

| 모델/방법 | 논문 제목 | 연도 | 분야 | 주요 기여 요약 | 문제 해결 방식 요약 | 출처 |
| --- | --- | --- | --- | --- | --- | --- |
| InstructPersona | Aligning Large Language Models with Persona via Instruction Tuning | 2023 | 페르소나 기반 LLM 튜닝 | 사용자 캐릭터 성격과 태도를 지속 유지하는 instruction-tuning 방식 제안 | 페르소나 설정을 명시적으로 포함한 지시문으로 파인튜닝 수행 | https://arxiv.org/abs/2305.14530 |
| Character-LLM | Constitutional AI: Harmlessness from AI Feedback | 2023 | 감정·성격 제어 | AI 스스로 “헌법”을 기반으로 말투·태도를 판단하고 유지하도록 학습 | 사전 정의된 규범에 따라 자가 피드백 구조를 도입 | https://arxiv.org/abs/2212.08073 |
| PersonaGPT | Generating Persona-Consistent Dialogues by Conditioning on Dialogue History | 2020 | 대화 일관성 유지 | 이전 대화 기반으로 페르소나 일관성을 강화하는 구조 제안 | Dialogue History를 활용해 캐릭터 유지 | https://arxiv.org/abs/2001.05671 |
| LaMDA (Google) | Towards a Conversational Agent that Can Chat About Anything | 2022 | 오픈 도메인 대화 | 주제와 캐릭터 간의 일관된 토픽 전개 유지 능력 향상 | 안전성과 지속성을 고려한 토픽 기반 응답 흐름 설계 | https://blog.google/technology/ai/lamda/ |
| ReAct Prompting | ReAct: Synergizing Reasoning and Acting in Language Models | 2022 | 추론 + 인격 유도 | 모델이 추론 과정 중 스스로의 역할/상태를 표현하며 일관된 흐름 생성 | 생각("Thought")과 행동("Action") 분리해 메타인지적 캐릭터 강화 | https://arxiv.org/abs/2210.03629 |
| Metaphor Persona | Framing Persona in Dialogue with Metaphors | 2023 | 스타일 표현 | 은유 기반 프레이밍을 통해 더 설득력 있는 캐릭터 표현 제안 | 비유와 상징을 통해 말투와 성격을 간접 강화 | https://arxiv.org/abs/2306.01670 |
| GPTs Character Mode | Custom GPTs (Character Builder) | 2023 | 상업적 응용 | 사용자가 직접 GPT의 말투/성격 설정 가능하도록 UI 제공 | Memory + Instructions를 조합해 캐릭터 지속 유지 | https://platform.openai.com/docs/guides/gpts/creating-gpts |

### 연구 설계 방안

### 유의점

---

## 5. PDF 문서 분석 (Computer Vision)

### 문제 정의

현재의 LLM은 GPT 계열을 포함해 다양한 문서 분석 및 언어 이해 작업에서 높은 성능을 보이고 있으나,

**약관·계약서와 같은 시각-텍스트 혼합 문서에서의 구조적 정보 추출**—즉, 조항, 항목, 조건, 예외, 책임 등의 구획 및 의미 연결—에 대해서는

**일관되고 정확한 추출을 수행하는 데 한계를 보인다.**

예를 들어,

“제 3조 제 2항의 예외 조건은?”이라는 질문은 단순한 텍스트 검색이 아닌,

문서의 시각적 레이아웃(번호, 들여쓰기, 굵기 등)과 의미적 구조(상위-하위 조항, 조건절 포함)를 함께 이해해야 한다.

그러나 LLM은 “제 3조는 계약 해지에 대한 조항입니다”와 같이 **계층적 문맥 연결이 부족하거나, 시각적 구조를 무시한 응답**을 생성할 수 있다.

이러한 오류는 **문서의 길이, 조항 순서와 무관하게 빈번히 발생**하며,

이는 LLM이 아직 **명시적 시각 정보 없이 문서 구조의 계층성과 인과성을 추론하는 능력에 제한이 있음을 시사한다.**

### 대표 기술/논문(SOTA)

| 모델/방법 | 논문 제목 | 연도 | 분야 | 주요 기여 요약 | 문제 해결 방식 요약 | 출처 |
| --- | --- | --- | --- | --- | --- | --- |
| Donut | OCR-Free Document Understanding Transformer | 2022 | OCR-Free 문서 구조 추출 | OCR 없이 문서 이미지를 입력받아 구조화된 JSON으로 직접 예측 | 문서 이미지 → Vision Encoder → Sequence Decoder로 JSON 생성 | https://arxiv.org/abs/2111.15664 |
| LayoutLMv3 | Pre-training for Document AI with Unified Text and Image Masking | 2022 | 멀티모달 문서 이해 | 이미지+텍스트+레이아웃을 통합해 문서 구조와 시각적 단서를 동시에 학습 | Text/Image/Layout을 동시에 처리하는 Unified Transformer 구조 | https://arxiv.org/abs/2204.08387 |
| DocFormer | End-to-End Transformer for Document Understanding | 2021 | 문서 구조 인식 | 문서 이미지에서 의미적 블록(조항/표 등)의 관계를 Transformer로 학습 | Text Embedding + Visual Token을 통합해 end-to-end 학습 | https://arxiv.org/abs/2104.07440 |
| StrucText | Structuring Text in Visually Rich Documents | 2022 | 문서 구조화 | 표/목록 등 시각적으로 구조화된 영역을 그래프 형태로 재구성 | 시각적 텍스트 노드를 그래프 구조로 변환 후 정보 추출 | https://arxiv.org/abs/2205.08575 |
| LayoutXLM | Multilingual Pre-training for Multimodal Document Understanding | 2021 | 다국어 문서 이해 | 다양한 언어의 문서를 시각·언어·레이아웃 정보 통합하여 구조적으로 처리 | BERT 기반 다국어 멀티모달 문서 모델 | https://arxiv.org/abs/2104.08836 |
| DocLayout | Visual Document Understanding by Layout-Aware Language Modeling | 2023 | 시각적 문서 레이아웃 이해 | 문서의 시각적 레이아웃을 Token-Level 시퀀스 구조로 모델링 | 텍스트+위치+이미지 정보를 일련의 Token으로 Flatten 처리 | https://arxiv.org/abs/2303.07309 |

### 연구 설계 방안

### 유의점

---

## 6. 쇼핑 에이전트 (Vibe Shopping)

### 문제 정의

현재의 LLM 및 추천 시스템은 GPT 계열을 포함해 다양한 사용자 요청에 반응할 수 있도록 고도화되고 있으나,

**스타일 취향이 반영된 상대적·감성적 질의의 이해와 추천 수행**—즉, 사용자의 취향 변화, 기준 제품과의 상대 비교, 감성 스타일의 해석—에 대해서는

**정확하고 일관된 추천을 제공하는 데 한계를 보인다.**

예를 들어,

“이거보다 더 클래식한 걸 추천해줘”라는 질의는 단순한 유사도 기반 추천이 아닌,

**참조 제품 → ‘클래식함’이라는 감성적 스타일 → 상대적 비교 → 추천**이라는 일련의 **취향 기반 인과 구조 추론**을 요구한다.

그러나 현재의 추천 에이전트는

“비슷한 색상의 제품” 혹은 “가격이 비슷한 상품” 등 **표면적 속성에 기반한 추천**에 그치거나,

“더 트렌디한 제품”처럼 질의와 반대되는 방향의 **문맥 불일치 추천**을 생성할 수 있다.

이러한 오류는

**스타일 카테고리의 복잡성, 감성 어휘의 애매성, 참조 제품의 문맥 미해석 등에서 기인**하며,

이는 LLM이 아직 **상대적 취향 변화와 감성 개념을 명시적 스타일 공간 내에서 해석하고 이동하는 능력이 제한적임**을 시사한다.

### 대표 기술/논문(SOTA)

| 모델/방법 | 논문 제목 | 연도 | 분야 | 주요 기여 요약 | 문제 해결 방식 요약 | 출처 |
| --- | --- | --- | --- | --- | --- | --- |
| StyleBERT | StyleBERT: Text-driven Style-aware Image Retrieval | 2021 | 스타일-텍스트 연관 | 감성적 질의(예: "더 미니멀한")를 시각적 스타일로 매핑 | BERT 기반 텍스트 + 이미지 임베딩 공동학습으로 스타일 감성 연관 추출 | https://arxiv.org/abs/2106.09644 |
| FashionCLIP | FashionCLIP: Understanding Fashion in Context | 2022 | 멀티모달 추천 | 패션 도메인 특화 CLIP 모델로 감성적 스타일 표현 이해 | CLIP 구조 + 도메인 사전학습으로 "더 클래식한", "트렌디한" 해석 가능 | https://arxiv.org/abs/2203.16514 |
| CLOOB | CLOOB: Contrastive Learning with Bootstrapping and Attention | 2021 | 이미지-텍스트 정렬 | 감성 스타일 등 추상 개념 매칭 향상 | CLIP 개선 모델, 부트스트래핑 기반 이미지-텍스트 정렬 성능 향상 | https://arxiv.org/abs/2110.11316 |
| StyleCLIP | StyleCLIP: Text-Driven Manipulation of StyleGAN Imagery | 2021 | 스타일 전이/편집 | “더 우아하게” 같은 질의를 시각적 스타일로 반영 | StyleGAN latent space 내 텍스트 기반 조정 수행 | https://arxiv.org/abs/2103.17249 |
| GSM-Symbolic | GSM-Symbolic: Assessing LLMs’ Symbolic Reasoning Abilities... | 2024 | 인과 구조 추론 | 복잡한 문장 구조에서 의미적 reasoning 성능 평가 | 구조적 정보 재구성 → 상위 개념 일반화 및 추론 능력 측정 | https://arxiv.org/abs/2410.05229 |

### 연구 설계 방안

### 유의점

---

## 7. 단어 맞추기 (개념 매핑)

### 문제 정의

현재의 LLM은 GPT 계열을 포함해 다양한 언어 이해 작업에서 높은 성능을 보이지만,

**사용자 문장에서 핵심 개념(key concept)이나 분류군(category)을 추출하여 시스템 내 구조화된 항목에 일관되게 매핑하는 작업**에서는

**겉으로 드러난 단어(표현)의 형태만의 연관성에 머무르며, 맥락적 해석·구조적 연결에는 한계를 보인다.**

예를 들어,

“실비는 예전에 해지했고, 지금은 운전자 특약만 남겨뒀어요.”라는 문장은 단순한 단어 인식이 아니라,

보험 상품(실손의료비, 운전자 보험)의 **상태 변화**, **시점**, **속성 관계**를 파악하는

**개념 단위 추출 → 분류군 연결 → 속성 판단 → 구조 매핑**의 일련의 복합 추론을 요구한다.

그러나 LLM은 "운전자 특약"만을 추출하거나,

"실비" 역시 현재 유지 중인 상품으로 잘못 분류하는 등,

**문맥의 비정형 표현**과 **개념 간 관계성**, **상태 속성의 해석**에 실패하는 경우가 잦다.

이는 LLM이 기본적으로 **단어 패턴 기반의 생성 모델**이라는 구조적 한계에서 비롯된다.

이처럼, 모델은 문장의 흐름이나 사용자의 의도를 **논리적으로 분석**하거나 **의미적 계층 구조에 따라 해석**하는 것이 아니라,

단지 **자주 함께 등장하는 단어와 문장을 통계적으로 생성**할 뿐이며,

그 결과, 사용자 문장의 **개념 정규화**, **속성 판단**, **시스템 구조 매핑**과 같은

**고차원적 해석 및 응용 능력**에는 **근본적인 한계**를 드러낸다.

이러한 오류는 문장의 길이나 단어의 난이도와 무관하게 발생하며,

LLM이 아직 **사용자 언어를 구조화 개체로 명시적으로 추론하고 연결하는 능력**에는 제한이 있음을 시사한다.

### 대표 기술/논문(SOTA)

| 모델/방법 | 논문 제목 | 연도 | 분야 | 주요 기여 요약 | 문제 해결 방식 요약 | 출처 |
| --- | --- | --- | --- | --- | --- | --- |
| ReFinED | ReFinED: Entity Linking with Fine-Grained Types | 2021 | Entity Linking, Ontology | 빠르고 정확한 entity linking을 위한 fine-grained 분류 체계 제안 | 개체 식별과 동시에 분류군(타입)을 정밀하게 추론 | [ACL](https://aclanthology.org/2021.acl-long.183/) |
| LUKE | LUKE: Deep Contextualized Entity Representations... | 2020 | 개체 인식 및 문맥 의미 파악 | Entity-aware self-attention 설계로 문맥 속 개체 인식 강화 | 개체와 일반 단어를 함께 처리하며 문맥 내 의미 추론 | [arXiv:2010.01057](https://arxiv.org/abs/2010.01057) |
| TAPAS | TAPAS: Weakly Supervised Table Parsing via Pre-training | 2020 | 구조 매핑 / QA | 자연어 질문을 테이블 데이터와 자동 연결 | 자연어 입력을 구조화된 테이블에 매핑하여 질의 응답 수행 | [ACL](https://aclanthology.org/2020.acl-main.398/) |
| SPERT | Span-based Entity and Relation Transformer | 2019 | 개체-관계 추출 | 개체 및 관계를 span 단위로 추출하여 통합 정보 제공 | 개체와 관계를 동시에 추출하여 구조화 표현으로 연결 | [arXiv:1909.07755](https://arxiv.org/abs/1909.07755) |
| KELM | KELM: Knowledge Enhanced Language Model for NLG | 2021 | 의미론적 정렬 | 구조화된 triple 지식과 자연어 표현 간 정렬 학습 | LLM에 사전 지식 주입 → 자연어 ↔ 구조화 지식 간 일관된 연결 제공 | [arXiv:2109.03904](https://arxiv.org/abs/2109.03904) |

### 연구 설계 방안

### 유의점