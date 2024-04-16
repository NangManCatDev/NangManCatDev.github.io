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
	- <font color="#d83931">데이터의 논리적 구조가 릴레이션, 즉 테이블 형태로 표현되는 데이터 모델, 하나의 개체를 하나의 릴레이션으로 저장</font>
- **릴레이션 구조와 구성 요소**
    <img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture1.png" width="800"><br>
- **용어 정의**
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture2.png" width="800"><br><br>

## 2. 기본개념
- <font color="#d83931">스킴(scheme)은 스키마와 같은 의미로 사용한다.</font>
- <font color="#d83931">스키마(schema): 대략적인 계획이나 도식을 뜻함, 스킴은 구체적이고 확정된 것을 말함.</font><br>

## 2.1 데이터 모델
- **데이터 모델**
	: 데이터베이스를 구축할 때 체계화된 구조를 갖추는 것이 필요한데, 이때 데이터베이스 구조를 명시하기 위한 개념들의 집합을
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture3.png" width="800"><br>

## 2.2 관계 데이터 모델
- **관계 데이터 모델 vs 파일 시스템**
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture4.png" width="800"><br><br>


# 2.1 릴레이션
## 2.1.1 릴레이션 구성
- **릴레이션 스킴**
	- 릴레이션 이름(R)과 릴레이션을 구성하는 속성 이름(A1, A2, A3, ... An)들의 합으로 표현하며, R(A1, A2, A3, ... An)과 같이 표현한다.
- **릴레이션 인스턴스**
	- 어느 한 시점에 릴레이션 R에 포함되는 투플(tuple)의 집합을 의미하는 것으로 실제 값이라고도 함.
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture5.png" width="800"><br>

- 관계형 데이터 모델(relational data model)은 <font color="#d83931">테이블 형식을 이용하여 데이터를 정의하고 설명한 모델</font>
	<img src="/images/2024-04-17-DatabaseSystem-Chapter3/Picture6.png" width="800"><br>
$$예) 학생에 대한 정보를 테이블로 표현$$
1. **<font color="#d83931">속성(attribute)</font>**: 각 열에 부여된 이름이며, 학번, 이름, 학과명, 성별, 성적이 속성에 해당.
2. **<font color="#d83931">도메인(domain)</font>**: 각 속성에 입력 가능한 값들의 범위를 말한다. 성별 속성의 도메인은 '남' 또는 '여'가 된다.
3. **<font color="#d83931">차수(degree)</font>**: 속성의 수를 말하며, 위의 예에서는 5개의**d83931">
4. **<font color="#d83931">튜플(tuple)</font>**: 각 행을 '튜플'이라 하는데,  하나의 튜플은 각 속성에서 정의된 값 들을 이용해서 구성된다. 위의 예에서는 <21626001, 홍길동, 스마트IT학과, 남, 95>가 하나의 튜플이 된다.
5. **<font color="#d83931">카디널리티(cardinality)</font>: 튜플의 수를 '카디널리티'라 하고, 3개의 튜플이 있으므로 카디널리티는 3이 된다.
6. **<font color="#d83931">릴레이션(relation)</font>**: 테이블을 '릴레이션'이라 하는데, 중복된 튜플이 있어서는 안되고, 중복된 속성이 있어서도 안된다.
7. <font color="#d83931">키(key)</font>: 릴레이션에서 튜플을 유일하게 식별할 수 있는 속성이나 속성의 집합을 말한다.<br>

## 2.1.2 릴레이션 특성
- 투플의 유일성
	: 한 릴레이션에는 중복된 투플이 존재하지 않는다.
- 투플의 무순서
	: 한 릴레이션에 저장된 투플들 간에는 순서가 없다.
- 속성의 무순서
	: 한 릴레이션을 구성하는 속성들 간에는 순서가 없다.
- 속성의 원자성
	: 모든 속성 값은 원자 값(atomic value)이다.<br>

원자 값 = 더이상 분해할 수 없는 하나의 값
