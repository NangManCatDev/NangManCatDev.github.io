---
layout: single
title: "데이터베이스시스템 Chapter.2"
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
# 데이터베이스 시스템 구성
<br>
<br>

# 1. 3단계 데이터 베이스 구조
<hr>
데이터 베이스를 관점에 따라 3개 계층으로 분리하여 <font color="#245bdb">데이터베이스 사용자에게 내부적으로 복잡한 데이터베이스 구조를 단순화시킨 관점</font>을 제공하는 것.

1. **<font color="#d83931">외부단계(external level) : 외부 스키마(external schema) 또는 서브 스키마</font>**
	- <u>일반 사용자나 응용 프로그래머가 사용</u>하는 스키마로, <u>각각의 데이터베이스를 이용하는 각 개인의 관점 또는 사용자 뷰(user view)를 표현</u>하는 단계
2. **<font color="#d83931">개념단계(conceptual level) : 개념 스키마 또는 단순히 스키마라고 함</font>**
	- <u>전체적인 데이터 구조</u>로 <u>범 기관적인 관점에서 데이터베이스를 정의</u>한 것
	- 데이터베이스에 저장되는 데이터(엔티티, 속성)와 그들의 관계 뿐만 아니라, <u>데이터의 제약사항(constraint), 보안(security), 무결성(integrity) 규칙(데이터의 정확성) 등을 포함</u>
3. **<font color="#d83931">내부단계(interner level) : 내부 스키마</font>**
	- <u>물리적인 저장장치에서 데이터가 실제적으로 저장되는 방법을 표현</u>하는 단계
	- 실제로 저장될 내부 레코드 형식, 인덱스 유무, 암호화(encryption) 등에 대한 명세 포함
    <img src="/images/2024-04-10-DatabaseSystem-Chapter2/Picture1.png" width="800">
    <img src="/images/2024-04-10-DatabaseSystem-Chapter2/Picture2.png" width="800">
    <img src="/images/2024-04-10-DatabaseSystem-Chapter2/Picture3.png" width="800">
<br>
<br>
<br>
<br>

# 2. 스키마 vs 인스턴스
<hr>
- **<font color="#d83931">스키마(schema)</font>** <br>
	\: <u>데이터베이스에 저장되는 <font color="#245bdb">데이터의 구조 및 유형을 정의</font></u>하는 것으로, <u>데이터베이스의 전체적인 정의를 일컬음.</u>
- **<font color="#d83931">인스턴스(instance)</font>** <br>
	\: <font color="#245bdb">데이터베이스에 저장되는 실제 값</font>을 가리킴.
    <img src="/images/2024-04-10-DatabaseSystem-Chapter2/Picture4.png" width="800">
<br>
<br>
<br>
<br>

# 3. 데이터 독립성
<hr>
데이터 독립성의 기본 개념은 <u>하위 단계의 구현 내용을 추상화하여 상위 단계에서는 모르도록 하는 것</u>(즉, 데이터베이스에서 <u>응용 프로그램의 변경없이 기억 장치의 구조나 처리 방식을 변경</u>할 수 있는 능력)

(데이터베이스 구현상의 세부 사항을 숨김으로써 사용자는 세부 사항보다는 일반적인 구조에만 집중하게 되므로 <font color="#245bdb">편리성 및 처리의 효율화를 극대화</font> 시키고자 하는 것)

- **<font color="#245bdb">물리적 데이터 독립성</font>** <br>
	\: 내부단계의 스키마가 변경되어도 <u>외부단계와 개념단계의 스키마에는 영향을 미치지 않도록 지원</u>하는 것.
- **<font color="#245bdb">논리적 데이터 독립성</font>** <br>
	\: 개념단계의 스키마가 변경되어도 최상위 단계인 <u>외부 단계의 스키마에는 영향을 미치지 않도록 지원</u>하는 것.
    <img src="/images/2024-04-10-DatabaseSystem-Chapter2/Picture5.png" width="800">
<br>

- **데이터 독립성 특성 지원**
	- **<font color="#d83931">유지보수 비용 감소</font>**
	- **<font color="#d83931">요구사항 대응 향상</font>**
	- **<font color="#d83931">중복데이터 감소(= 데이터의 중복성 최소화)</font>**
	- **<font color="#d83931">데이터 복잡도 하락</font>**
<br>
<br>
<br>
<br>

# 4. 데이터베이스 시스템
<hr>
- **<font color="#245bdb">데이터베이스 시스템</font>** <br>
	\: 데이터베이스를 통하여 데이터를 저장하고 관리하기 위한 목적으로 사용되는 일체의 시스템
- <u>데이터베이스 시스템에서 가장 중요한 역할</u>을 수행하는 것은 **<font color="#d83931">데이터베이스 관리 시스템(Database Management System, DBMS)</font>**이다.
- <u>DBMS가 관리하는 데이터의 집합을 데이터베이스</u>라 한다.
    <img src="/images/2024-04-10-DatabaseSystem-Chapter2/Picture6.png" width="800">
    <img src="/images/2024-04-10-DatabaseSystem-Chapter2/Picture7.png" width="800">
<br>
<br>
<br>
<br>

# 5. 데이터베이스 사용자
<hr>
1. **<font color="#d83931">데이터베이스 관리자(Database Administrator, DBA)</font>**
	- <font color="#245bdb">데이터베이스 설계와 운영, 행정 업무 불평 해결, 시스템 감시 및 성능 분석 등</font>
2. **데이터베이스 설계자(database designer)**
3. **응용 프로그래머(application programmer)**
4. **최종 사용자(end user)**
	- 초보 사용자(parametric end user)
	- 캐주얼 사용자(casual end user)
	- 전문 사용자(sophisticated end user)
	- 독자적인 사용자(stand-alone user)
    <img src="/images/2024-04-10-DatabaseSystem-Chapter2/Picture8.png" width="800">
<br>
<br>

- **<font color="#d83931">데이터베이스 관리자</font>**
	데이터베이스 관리자(Database Administrator, DBA)는 데이터베이스 시스템을 운영·관리한다. <font color="#245bdb">데이터베이스를 직접 활용하기보다는 조직 내의 사용자를 위해 데이터베이스를 설계 및 구축</font>하고, 제대로 서비스할 수 있도록 <font color="#245bdb">데이터베이스를 제어</font>한다. 데이터베이스 관리자는 다음 절에서 살펴볼 데이터 언어 중 주로 데이터 정의어와 데이터 제어어를 이용해 데이터베이스에 접근한다. 데이터베이스 관리자는 데이터베이스 운영·관리를 책임지므로 컴퓨터 시스템이나 데이터베이스와 관련해 지식과 경험을 많이 갖추고 있어야 한다.
- **<font color="#d83931">데이터베이스 관리자의 주요 업무</font>**
	- 데이터베이스 <u>스키마</u> 정의
	- 물리적 저장 구조와 접근 방법 결정
	- 무결성 유지를 위한 제약조건 정의
	- <u>보안</u> 및 접근 권한 정책 결정
	- 백업 및 <u>회복 기법</u> 정의
	- 시스템 성능 감시 및 성능 분석
	- 데이터베이스 재구성
<br>
<br>
<br>
<br>

# 6. 데이터베이스 언어
<hr>
1. **<font color="#245bdb">데이터 정의어(Data Definition Language, DDL)</font>**
	- 데이터베이스 스키마를 정의하거나 수정할 목적으로 사용
	- DBA나 DB설계자가 주로 사용
	- DB와 테이블 생성, 변경 및 삭제, 인덱스 생성 및 삭제, View 생성 및 삭제 등
2. **<font color="#245bdb">데이터 조작어(Data Manapulation Language, DML)</font>**
	- SELECT(검색), INSERT(삽입), UPDATE(갱신), DELETE(삭제) 기능 제공
	- 절차적 DML과 비절차적 DML
		- **절차적 DML**
			\: 사용자가 <font color="#245bdb">무슨 데이터(what)</font>을 원하며 어떻게 접근해야 되는지 <font color="#245bdb">처리 방법(how)</font>을 기술, 호스트 프로그래밍 언어로 작성된 응용 프로그램 속에 내장(embedded)되어 사용
		- **비절차적 DML**
			\: 일반적인 질의어(query language)
3. **<font color="#245bdb">데이터 제어어(Data Control Language, DCL)</font>**
	- 데이터베이스 내의 데이터를 올바르고 정확하게 유지하기 위한 언어
	- 보안(security), 무결성(integrity), 데이터 회복(recovery), 병행수행(concurrency) 등
    <img src="/images/2024-04-10-DatabaseSystem-Chapter2/Picture9.png" width="800">
    <img src="/images/2024-04-10-DatabaseSystem-Chapter2/Picture10.png" width="800">
<br>
<br>
<br>
<br>

# 7. 데이터베이스 관리 시스템
<hr>
- **<font color="#245bdb">데이터베이스 관리 시스템(Database Management System, DBMS)의 정의</font>**
	- 파일 시스템의 단점을 극복하고 데이터를 효율적으로 관리하기 위한 시스템
	- 사용자 애플리케이션과 데이터베이스 간의 인터페이스 역할을 하는 프로그램
- **<font color="#d83931">데이터베이스 관리 시스템의 필수기능</font>**
	- **<font color="#d83931">정의 기능</font>** <br>
		\: 외부 스키마, 개념 스키마, 내부 스키마 그리고 이들과 연관된 모든 사상이 가능하도록 <font color="#245bdb">DDL(Data Definition Language)를 지원하고, DDL 컴파일러를 가져야 함</font>
	- **<font color="#d83931">조작 기능</font>** <br>
		\: SELECT(검색), INSERT(삽입), DELETE(삭제), UPDATE(수정) 연산을 위해 <font color="#245bdb">DML(Data Manipulation Language)를 지원하며, DML 컴파일러를 가져야 함</font>
	- **<font color="#d83931">제어 기능</font>** <br>
		\: <font color="#245bdb">질의 최적화(query optimization)</font>
- **데이터베이스 관리 시스템 이용시 장점**
	- **<font color="#d83931">데이터의 독립성을 제공</font>**
	- **<font color="#d83931">데이터의 중복성을 최소화</font>**
	- **<font color="#245bdb">데이터를 공유</font>**
	- **<font color="#245bdb">데이터 보안을 보장</font>**
	- **<font color="#245bdb">데이터 무결성 유지</font>** <br>
		\: DB가 조작될 때 마다 그 값들의 유효성을 검사하여 데이터 정확성 유지
	- **<font color="#245bdb">데이터의 일관성(consistency)을 유지</font>** <br>
		\: 현실 세계의 어느 한 사실을 나타내는 2개의 데이터가 있을 때, 하나의 데이터만 변경되고 다른 하나는 변경되지 않는다면, 데이터 간의 불일치성, 즉 모순성을 갖게 됨
	- **<font color="#245bdb">표준화를 달성</font>**
- **데이터베이스 관리 시스템 이용시 단점**
	- **<font color="#245bdb">운영비 증대</font>**
	- **<font color="#245bdb">상대적으로 성능이 저하될 수 있음</font>** 등
<br>
<br>
<br>
<br>

# 8. 데이터베이스
<hr>
- **데이터베이스 시스템이 관리하는 데이터베이스의 구성**
	1. **데이터 파일**
	2. **데이터 사전**
		- DB에 저장되어 있는 모든 데이터 개체들에 대한 정의나 명세에 관한 정보를 유지·관리하는 시스템
		- 동의어 <br>
			\: 시스템 카탈로그, 메타데이터, 데이터에 대한 데이터
		- 저장 내용 <br>
			\: DB의 외부 스키마, 개념 스키마, 내부 스키마 및 스키마 사이의 사상정보 등을 저장
	3. **인덱스**