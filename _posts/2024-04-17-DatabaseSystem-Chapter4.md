---
layout: single
title: "데이터베이스시스템 Chapter.4"
categories: Database
tag: Database
typora-root-url: ../
author_profile: false
#sidebar:
#    nav: "docs"
#redirect_from:
#  - 이전 경로
---
<hr>
# 관계 데이터 연산
<br>
<br>

# 1. 개요
<hr>
- **<font color="#245bdb">질의어(query language)</font>**
	- <u><font color="#d83931">DBMS</font>는 검색, 삽입, 삭제, 수정 등의 데이터 조작을 쉽게 하기 위해 <font color="#d83931">질의어 제공</font></u>
	- 질의어는 <u>대체로 프로그래밍 언어보다 고급 수준</u>(사용자가 기술하고자 하는 내용을 보다 쉽고 간단한 방식으로 표현할 수 있다는 것을 의미)
	- <font color="#d83931">절차적 언어(procedural language)와 비절차적 언어(nonprocedural language)</font>
	- 관계형 데이터베이스에서는 데이터에 대한 검색을 표현하기 위해 <font color="#d83931">간결하고 형식적인 질의어인 관계대수(relational algebra)와 관계해석(relational calculus)을 제공</font>
	- 관계대수: 절차적 언어, 관계해석: 비절차적 언어
	- 이 언어들은 데이터베이스에서 사용하는 언어(SQL)에 대해 이론적 기반을 제공함
	- 관계대수에 대해 주로 설명
- **<font color="#245bdb">관계 데이터 연산</font>**
	    \: 1970년 E.F.Codd가 발표한 관계 데이터 모델에 포함된 연산 방법으로, <u>관계 대수와 관계 해석은 관계 데이터베이스를 처리하는 기능과 능력 면에서 동등</u>하다.
- **<font color="#245bdb">관계 대수</font>**: 관계 데이터베이스의 릴레이션을 조작하기 위하여 절차를 명시하는 절차 언어(procedural language)
	1. <u>원하는 정보(what)와 그 정보를 어떻게 유도하는가(how)를 기술하는 절차적 특성</u>을 갖는다.
	2. <u>집합과 관계연산에 기초</u>를 두고 있다.
	3. 프로그래밍 언어와 유사
	4. 관계 대수는 릴레이션을 처리하기 위한 연산의 집합으로 <u>피연산자가 릴레이션이고 결과도 릴레이션</u>이다.
- **<font color="#245bdb">관계 해석</font>**: <u>릴레이션에 저장된 어떤 데이터를 조작할 것인지를 명시하는 비절차적 언어(nonprocedural language)</u>
	1. 수학의 프레디킷 해석에 기반을 두고 있다.
	2. <font color="#245bdb">얻고자 하는 결과가 무엇(what)인가를 기술하는 비절차적 언어.</font>
	3. 튜플 관계해석과 도메인 관계해석이 있다.
    <img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture1.png" width="800"><br><br>
- **<font color="#d83931">관계 대수 연산자</font>**
    <img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture2.png" width="800"><br><br>

# 2.1 일반 집합 연산
 - 관계 대수의 <u>일반 집합 연산자는 <font color="#245bdb">합집합(Union), 차집합(Difference), 교집합(Intersection), 카디션 프로덕트(Cartesian product)</font></u> 등이다.
 - 이 중에서 <u>카티션 프로덕트를 제외한 나머지 3가지 연산자는 모두 피연산자인 두 개의 릴레이션이 모두 합병 가능(union-compatible)해야 한다.</u>
 - **<font color="#d83931">합병 가능한(Union-compatible) 릴레이션</font>**
	- <u>릴레이션 A와 B의 릴레이션 스킴이 동일</u>하다는 것.
	- <u>A와 B는 릴레이션 차수가 동일하고, 각각 대응하는 속성의 도메인이 동일하다는 의미</u>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture3.png" width="300"><br>

## 2.1.1 합집합
- **<font color="#245bdb">합집합(Union)</font>** 연산은 <u>합병 가능한 두 개의 릴레이션 A와 B의 합집합(A∪B)을 구하는 것</u>으로, 합집합 연산의 <u>결과는 <font color="#245bdb">릴레이션 A 또는 B에 속하는</font> 튜플들로 구성된 릴레이션</u>이다. 
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture4.png" width="800"><br>

## 2.1.2 교집합
- **<font color="#245bdb">교집합(Intersection)</font>** 연산은 <u>합병 가능한 두 개의 릴레이션 A와 B의 교집합(A∩B)을 구하는 것</u>으로, 교집합 연산의 <u>결과는 <font color="#245bdb">릴레이션 A와 B에 공통적으로</font> 속하는 튜플들로 구성된 릴레이션</u>이다.<br>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture5.png" width="800"><br>

## 2.1.3 차집합
- **<font color="#245bdb">차집합(DIFFERENCE)</font>** 연산은 <u>합병 가능한 두 개의 릴레이션 A와 B의 차집합(A B) 을 구하는 것</u>으로, 차집합(A B) 연산의 <u>결과는 <font color="#245bdb">릴레이션 A에만 있고 B에는 없는</font> 튜플들로 구성된 릴레이션</u>이다.<br>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture6.png" width="800"><br>

## 2.1.4 카디션 프로덕트(교차곱)
- **<font color="#245bdb">카티션 프로덕트(CARTESIAN PRODUCT)</font>** 연산은 <u>두 개의 릴레이션 A와 B의 카 티션 프로덕트(A B)를 구하는 것</u>으로, 카티션 프로덕트의 연산 <u>결과는 <font color="#245bdb">A에 속한 각 투플 a에 대하여 B에 속한 튜플 b를 모두 접속(concatenation : )시킨 튜플들(a b)</font> 로 구성된 릴레이션</u>이다.
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture21.png" width="800"><br>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture22.png" width="800"><br><br>



# 2.2 순수 관계 연산
- 관계 대수의 <u>순수 관계 연산자는 <font color="#245bdb">셀렉트(SELECT), 프로젝트(PROJECT), 조인 (JOIN), 디비전(DIVISION)</font></u> 등이다

## <font color="#d83931">2.2.1 셀렉트</font>
- **<font color="#d83931">셀렉트(SELECT)</font>** 연산은 <font color="#d83931">릴레이션에서 주어진 조건을 만족하는 투플들을 검색</font>하는 것으로, <u>기호는 그리스 문자의 시그마(σ)</u>를 이용한다.
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture7.png" width="800"><br>

## 2.2.2 프로젝트
- **<font color="#245bdb">프로젝트(PROJECT)</font>** 연산은 <font color="#d83931">릴레이션에서 주어진 조건을 만족하는 속성들을 검색</font> 하는 것으로, <u>기호는 그리스 문자의 파이(π)</u>를 이용한다. 릴레이션에서 속성은 열(column)을 가리키므로 <font color="#d83931">프로젝트를 수직적 연산(vertical operation)</font>이라고도 한다
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture23.png" width="800"><br>

## <font color="#d83931">2.2.3 조인</font>
- **<font color="#d83931">조인(JOIN)</font>** 연산은 <font color="#d83931">두 개의 릴레이션 A와 B에서 공통된 속성을 연결하는 것</font>이다. 이와 같은 조인 연산은 <u>하나의 릴레이션으로는 원하는 결과를 얻을 수 없을 경우, 두 개이상의 릴레이션을 공통 속성으로 연결하여 원하는 결과를 포함한 릴레이션을 생성할 때 이용</u>한다.
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture8.png" width="800"><br>

## 2.2.4 디비전
- <u>두 개의 릴레이션 A와 B에 대한 <font color="#245bdb">디비전(DIVISION)</font> 연산인 A ÷ B의 결과는</u> 다음과 같다. <u>나누어지는 릴레이션인 A는 릴레이션 B의 모든 내용을 포함한 것이 결과 릴레이션이 된다.</u>
- <font color="#d83931">A의 차수가 (m+n)이고 B의 차수가 n이면, A÷B의 차수는 m이 된다.</font>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture9.png" width="800"><br><br>



# 관계 데이터 연산 - 관계 대수 (총정리)
- **<font color="#245bdb">관계 대수(relational algebra)</font>**
	- 데이터베이스에 저장된 데이터를 문자와 사용한 연산을 통해 요청한 데이터를 정보화하여 얻을 수 있는데 그 원리가 산술 연산자와 유사
	- 절차적 언어이며, 프로그램 언어와 유사
- **<font color="#245bdb">일반 집합 연산자</font>**
	- <u>(1)합집합, (2)교집합, (3)차집합, (4)카티션 프로덕트(Cartesian Product)</u>
- **<font color="#245bdb">순수 관계 연산자</font>**
	- <u>(5)SELECT, (6)PROJECT, (7)JOIN, (8)DIVISION</u>
- **<font color="#245bdb">관계 대수의 어려움</font>**
	- <u>관계 대수 자체는 산술 연산을 할 수 없음</u>
	- <u>집단 함수를 지원하지 않음</u>
	- <u>정렬을 못 함</u>
	- <u>데이터베이스 내용을 갱신할 수 없음</u>
	- <u>프로젝트 연산의 결과에 중복된 튜플을 나타내는 것이 필요할 수도 있는데 이를 명시하지 못함</u>

	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture10.png" width="800"><br>
    <img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture11.png" width="800"><br>
    <img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture12.png" width="800"><br>
    <img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture13.png" width="800"><br>
    <img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture14.png" width="800"><br>
    <img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture15.png" width="800"><br>
    <img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture20.png" width="800"><br>

- **<font color="#d83931">(7)조인(JOIN, ▷◁), 조인 연산</font>**
	- 공통 속성을 중심으로 두 개의 릴레이션을 하나로 합쳐서 새로운 릴레이션
	- 연산자의 종류에는 <font color="#245bdb">세타 조인(theta join), 동등 조인(equi join), 자연 조인(natural join), 외부 조인(outer join), 세미 조인(semi join)</font>
- **세타 조인**
	- 두 릴레이션 R(A1, A2, ..., An)과 S(B1, B2, ..., Bm)의 세타 조인한 결과로 얻어지는 차수는 릴레이션 R의 차수와 릴레이션 S의 차수를 합한 것(n+m)
	- 어트리뷰트는 (A1, A2, ..., An, B1, B2, ..., Bm)이며, 조인 조건을 만족 하는 튜플들로 이루어진 릴레이션 세타는 { =, <>, <=, <, >=, > } 중의 하나
- **세미 조인**
	- 조인 대상 릴레이션 중 하나를 프로젝트 연산을 수행한 후에 조인을 하는 것
- **동등 조인(equi join) : 내부조인, 이퀴조인 동의어**
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture16.png" width="800"><br>
- **자연 조인(natural join)**
	<img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture17.png" width="800"><br>
- **외부조인(outer join)**
    <img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture18.png" width="800"><br>
    <img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture19.png" width="800"><br>



# 3. 관계 해석
- <u>비절차 언어인 관계 해석(relational calculus)은 데이터베이스를 이용하여 얻고자 하는 <font color="#245bdb">결과가 무엇(What)인가를 기술</font>하는 것으로, <font color="#245bdb">어떻게(How)를 기술하는 관계 대수와 차이</font>가 있다.</u>
- 자연어(사람이 쓰는 언어)와 유사
- <font color="#245bdb">튜플 관계 해석(tuple relation calculus)</font>
- <font color="#245bdb">도메인 관계 해석(domain relation calculus)</font>