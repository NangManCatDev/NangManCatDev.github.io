---
layout: single
title: "데이터베이스시스템 Chapter.3"
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
# 관계 데이터 모델
<br>
<br>

# 1. 개요
<hr>
- **1970년도 E.F.Codd**
	- 관계 데이터 모델은(Relational Data Model)은 열(column)과 행(row)으로 이루어진 테이블(릴레이션)과 수학적으로 정의된 연산들로 구성된다.
	- <font color="#d83931"><u>데이터의 논리적 구조가 릴레이션, 즉 테이블 형태로 표현되는 데이터 모델</u>, 하나의 개체를 하나의 릴레이션으로 저장</font>
- **릴레이션 구조와 구성 요소**
    <img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture1.png" width="800"><br>
- **용어 정의**
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture2.png" width="800"><br><br>

# 2. 기본개념
## 2.0.1 데이터 모델
- **<font color="#245bdb">데이터 모델</font>**<br>
	\: 데이터베이스를 구축할 때 체계화된 구조를 갖추는 것이 필요한데, 이때 <font color="#245bdb">데이터베이스 구조를 명시하기 위한 개념들의 집합</font>을
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture3.png" width="800"><br>

## 2.0.2 관계 데이터 모델
- **<font color="#245bdb">관계 데이터 모델 vs 파일 시스템</font>**
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture4.png" width="800"><br><br>


# 2.1 릴레이션
## 2.1.1 릴레이션 구성
- <font color="#d83931"><u>스킴(scheme)</u>은 스키마와 같은 의미로 사용한다.</font>
- <font color="#d83931"><u>스키마(schema): 대략적인 계획이나 도식을 뜻함, 스킴은 구체적이고 확정된 것을 말함.</u></font><br>
- **<font color="#d83931">릴레이션 스킴</font>**
	- 릴레이션 이름(R)과 릴레이션을 구성하는 속성 이름(A1, A2, A3, ... An)들의 합으로 표현하며, R(A1, A2, A3, ... An)과 같이 표현한다.
- **<font color="#d83931">릴레이션 인스턴스</font>**
	- <u>어느 한 시점에 릴레이션 R에 포함되는 튜플(tuple)의 집합을 의미하는 것으로 실제 값이라고도 함.</u>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture5.png" width="800"><br>

- **관계 데이터 모델(relational data model)**은 <font color="#d83931">테이블 형식을 이용하여 데이터를 정의하고 설명한 모델</font>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture6.png" width="800"><br>
$$예) 학생에 대한 정보를 테이블로 표현$$
1. **<font color="#d83931">속성(attribute)</font>**<br>
	\: <font color="#245bdb">각 열에 부여된 이름</font>이며, 학번, 이름, 학과명, 성별, 성적이 속성에 해당.
2. **<font color="#d83931">도메인(domain)</font>**<br>
	\: <font color="#245bdb">각 속성에 입력 가능한 값들의 범위</font>를 말한다. 성별 속성의 도메인은 '남' 또는 '여'가 된다.
3. **<font color="#d83931">차수(degree)</font>**<br>
	\: <font color="#245bdb">속성의 수</font>를 말하며, 위의 예에서는 5개의 속성이 있으므로 차수는 5가 된다.
4. **<font color="#d83931">튜플(tuple)</font>**<br>
	\: <font color="#245bdb">각 행을 '튜플'</font>이라 하는데,  <font color="#245bdb">하나의 튜플은 각 속성에서 정의된 값 들을 이용해서 구성</font>된다. 위의 예에서는 <21626001, 홍길동, 스마트IT학과, 남, 95>가 하나의 튜플이 된다.
5. **<font color="#d83931">카디널리티(cardinality)</font>**<br>
	\: <font color="#245bdb">튜플의 수를 '카디널리티'</font>라 하고, 3개의 튜플이 있으므로 카디널리티는 3이 된다.
6. **<font color="#d83931">릴레이션(relation)</font>**<br>
	\: <font color="#245bdb">테이블을 '릴레이션'</font>이라 하는데, <font color="#245bdb">중복된 튜플이 있어서는 안되고, 중복된 속성이 있어서도 안된다.</font>
7. **<font color="#d83931">키(key)</font>**<br>
	\: <font color="#245bdb">릴레이션에서 튜플을 유일하게 식별할 수 있는 속성이나 속성의 집합</font>을 말한다.<br>

## 2.1.2 릴레이션 특성
- **<font color="#d83931">튜플의 유일성</font>**<br>
	\: <font color="#d83931">한 릴레이션에는 중복된 튜플이 존재하지 않는다.</font>
- **<font color="#d83931">튜플의 무순서</font>**<br>
	\: <font color="#d83931">한 릴레이션에 저장된 튜플들 간에는 순서가 없다.</font>
- **<font color="#d83931">속성의 무순서</font>**<br>
	\: <font color="#d83931">한 릴레이션을 구성하는 속성들 간에는 순서가 없다.</font>
- **<font color="#d83931">속성의 원자성</font>**<br>
	\: <font color="#d83931">모든 속성 값은 원자 값(atomic value)이다.</font><br><br>

**원자 값** = 더이상 분해할 수 없는 하나의 값<br><br>


# 2.2 속성
- **<font color="#245bdb">속성(attribute)</font>**이란 릴레이션의 열(column)이며, 파일의 시스템 필드(field)에 해당</font>된다.
- **속성의 분류**
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture7.png" width="800"><br>

## 2.2.1 속성의 정의
- **<font color="#245bdb">단순 속성</font>**<br>
	\: <u>속성 값이 하나의 의미만을 가지는 것.</u>
- **<font color="#245bdb">복합 속성</font>**<br>
	\: <u>속성 값이 여러 의미를 포함</u>하는 것.
- **<font color="#245bdb">단일 값 속성</font>**<br>
	\: <u>원자 값인 것으로 하나의 값만 존재</u>하는 것
- **<font color="#245bdb">다중 값 속성</font>**<br>
	\: <u>속성 값이 여러 개 존재</u>할 수 있는 것.
- **<font color="#245bdb">널 속성</font>**<br>
	\: <u>속성 값이 널 값(null value)</u>인 것.
- **<font color="#245bdb">유도 속성</font>**<br>
	\: <u>새롭게 유도해 낸 속성</u><br>

## 2.2.2 속성의 종류
<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture8.png" width="800"><br>

## 2.2.3 복합 속성
<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture9.png" width="800"><br>

## 2.2.4 널 속성
<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture10.png" width="800"><br>

## 2.2.5 유도 속성
<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture11.png" width="800"><br>

## 2.2.6 도메인(domain)
- <font color="#245bdb">도메인(domain)은 특정 속성이 가질 수 있는 원자 값들의 집합</font>을 가리킨다.
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture12.png" width="800"><br>

## 2.2.7 키(key)
- <font color="#245bdb">키(key)는 릴레이션의 튜플을 유일하게 식별할 수 있는 속성의 집합.</font>
- **유일성(Uniqueness)**<br>
	\: <u>속성의 집합인 키의 내용이 릴레이션 내에서 유일하다는 특성.</u>
- **최소성(Minimality)**<br>
	\: <u>속성의 집합인 키가 릴레이션의 모든 튜플을 유일하게 식별하기 위하여 꼭 필요한 속성들로 구성되는 것.</u>


# 2.3 관계 데이터 모델의 자료구조(Data Structure)
- 데이터베이스에 표현될 대상으로서의 개체 타입과 이들 간의 관계를 명세한 것

1. 2차원의 원자 값을 갖는 테이블로 표시
2. <font color="#245bdb">테이블은 릴레이션, 릴레이션의 열은 속성(attribute), 행을 튜플(tuple)이라 함.</font>
3. <font color="#245bdb">하나의 릴레이션이 갖는 속성 수를 차수(degree), 튜플 수를 카디널리티(cardinality)라고 함.</font>
4. <font color="#245bdb">릴레이션은 고유 이름을 가지며, 릴레이션 내에서 속성명은 유일해야 함</font>
5. 릴레이션의 특성
	- <font color="#245bdb">모든 속성 값은 원자 값(atomic value)으로 구성된다.</font>
	- <font color="#245bdb">릴레이션을 구성하는 속성들 간에는 순서가 없다.</font>
	- <font color="#245bdb">릴레이션에 저장된 튜플 간에는 순서가 없다.</font>
	- <font color="#245bdb">튜플은 유일하다(중복된 튜플이 존재하지 않음).</font>

# 2.4 관계 데이터 모델의 키 분류
- **<font color="#245bdb">수퍼키</font>**<br>
	\: <u>유일성은 특성을 만족하는 속성 또는 속성들의 집합, 최소성은 만족시키지 못함.</u>
- **<font color="#245bdb">후보키</font>**<br>
	\: <u>유일성과 최소성을 만족하는 속성 또는 속성들의 집합.</u>
- **<font color="#245bdb">기본키</font>**<br>
	\: <u>후보키들 중 하나를 선정해 사용하는 것.</u>
- **<font color="#245bdb">대체키</font>**<br>
	\: <u>후보키를 대체할 수 있는 키(키본키로 선택되지 못한 후보키).</u>
- **<font color="#245bdb">외래키</font>**<br>
	\: <u>한 릴레이션(R1)에 속한 속성 또는 속성의 집합이 다른 릴레이션(R2)에서 기본 키로 이용되는 것(다른 릴레이션의 기본키를 그대로 참조).</u>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture13.png" width="800"><br>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture14.png" width="800"><br><br>


# 3. 관계 데이터 제약
- **<font color="#245bdb">도메인 무결성 제약</font>**
	- **<font color="#245bdb">도메인</font>**<br>
		\: <u>특정 속성(attribute)이 가질 수 있는 원자 값들의 집합.</u>
	- 속성 값이 허용될 수 있는가를 규정하는 것으로, 삽입 및 갱신 연산에 적용.
- **<font color="#245bdb">개체 무결성 제약(기본 키 제약 조건)</font>**
	- <u>릴레이션의 기본 키 속성은 널 값을 가질 수 없는 것.</u>
- **<font color="#245bdb">참조 무결성 제약</font>**
	- <u>외래키는 참조할 수 없는 값을 가질 수 없는 것.</u>
	- 즉, <u>릴레이션 R1에 저장된 튜플이 릴레이션 R2에 있는 튜플을 참조하려면 참조되는 튜플이 반드시 R2에 존재해야 한다는 <font color="#d83931">데이터 무결성</font>.</u>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture15.png" width="800"><br>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture16.png" width="800"><br>