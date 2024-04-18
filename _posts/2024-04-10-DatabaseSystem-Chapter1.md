---
layout: single
title: "데이터베이스시스템 Chapter.1"
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
# 데이터베이스 기본 개념
<br>
<br>

# 1. 개요
## 1-1 데이터와 정보
- **데이터(data): 자료**
	- 관찰이나 측정 등의 수단을 통해 수집한 사실(fact)이나 값(value)
- **Information**
	- <font color="#d83931">Data를 가공한 결과</font>
	- 의사결정에 도움을 줄 수 있음
<br>
<br>

- **정보 시스템(Information System)**
	- 조직체에서 필요한 자료를 수집, 저장해 두었다가 필요 시에 처리해서 의사결정에 필요한정보를 만들어 내고 분배하는 수단으로 사용되는 시스템
- **데이터 웨어하우스(Data Warehouse)**
	- 조직이나 기업체의 중심이 되는 주요 업무 시스템에서 추출되어 새로이 생성된 데이터베이스로서, 의사결정 시스템을 지원하는 주체적, 통합적, 시간적 데이터의 집합체
- **데이터 마이닝(Data Mining)**
	- 데이터 웨어하우스 규모가 대형화되고 복잡하게 될 때 관련된 데이터를 찾아내고 필요한 정보를 생성하는 과정
- **인공지능(Artificial Intelligence, AI)**
	- 인간의 학습능력과 추론능력, 지각능력, 자연언어의 이해능력 등을 컴퓨터 프로그램으로 실현한 기술
<br>
<br>

## 1.2 메타데이터
- **<font color="#d83931">메타데이터</font>**
	- <span style="white-space: nowrap;"><font color="#d83931">데이터에 대한 데이터</font>를 의미(데이터에 대한 정보를 가진 것)
	- 데이터의 구조(structure)나 제약사항(constraints) 등과 같은 속성(properties)이나 특성(characteristics)을 기술하는 것
<img src="/images/2024-04-10-DatabaseSystem-Chapter1/Picture1.png" width="800">
<br>
<br>
<br>
<br>

# 2. 데이터베이스 정의
## 2.1 데이터베이스의 정의
- **<font color="#d83931">데이터베이스의 정의</font>**: 특정 조직 내에서 다수의 사용자들이 <font color="#d83931">공유(share)</font>할 수 있도록 <font color="#d83931">통합(intergrate) </font>시키고 컴퓨터 저장 장치에 <font color="#d83931">저장(store)</font>시킨 <font color="#d83931">운영(operation) 데이터</font>의 집합.
- **<font color="#245bdb">공유 데이터</font>(shared data)** : <font color="#245bdb">다수의 사용자들이 공유</font>
- **<font color="#245bdb">통합 데이터</font>(integrate data)** : 여기 저산재되어 있지 않고 <font color="#245bdb">한 곳에 모아져 있으며, 데이터의 중복(data redundancy)을 최소화</font>하여 저장
- **<font color="#245bdb">저장 데이터</font>(store data)** : <font color="#245bdb">컴퓨터가 접근 가능한 저장 매체에 저장된 데이터</font>
- **<font color="#245bdb">운영 데이터</font>(operation data)** : 특정 조직의 고유 기능을 수행하기 위하여 <font color="#245bdb">반드시 유지해야 하는 데이터</font>를 의미
<br>
<br>

## 2.2 데이터베이스 특성
1. **<font color="#245bdb">실시간 접근(real-time accessibility)</font>** <br>
	\: 실시간 처리로 응답할 수 있어야 함
2. **<font color="#245bdb">계속적인 변화(continuous evolution)</font>** <br>
	\: 데이터의 삽입, 삭제, 갱신으로 항상 변하고, 그 속에서 현재의 정확한 데이터 유지
3. **<font color="#245bdb">동시 공유( concurrent sharing) 가능</font>** <br>
	\: 여러 사용자가 동시에 자기가 원하는 데이터에 접근
4. **<font color="#d83931">내용에 의한 참조(content reference)</font>** <br>
	\: 데이터의 레코드 위치나 주소가 아닌 사용자가 요구하는 데이터의 내용, 즉 데이터가 가지고 있는 값에 따라 참조
<br>
<br>
<br>
<br>

# 3. 데이터 처리 시스템
## 3.1 일괄 처리 시스템 vs 온라인 처리 시스템
- **데이터 처리에 대한 시간성**
	- **<font color="#d83931">일괄 처리 시스템</font>(batch processing system)** <br>
		\: <font color="#d83931">일정 기간 동안 데이터를 모아서 일시에 작업을 처리하는 시스템</font>(급여처리, 전기요금처리 등)
	- **<font color="#d83931">온라인 처리 시스템</font>(on-line processing system)** <br>
		\: <font color="#d83931">작업 처리 요구가 발생하면 즉시 시스템에서 처리
	<img src="/images/2024-04-10-DatabaseSystem-Chapter1/Picture2.png" width="800">
<br>
<br>

## 3.2 오프라인 처리 시스템 vs 온라인 처리 시스템
- **저장장치 접근성**
	- **<font color="#245bdb">오프라인 처리 시스템</font>(off-line processing system)** <br>
		\: <font color="#245bdb">특정 작업을 처리하는 도중에 저장 데이터에 접근할 수 없는 시스템</font>
	- **<font color="#245bdb">온라인 처리 시스템</font>(on-line processing system)** <br>
		\: <font color="#245bdb">작업 처리 중 저장 데이터를 접근하여 사용할 수 있는 시스템</font>
<br>
<br>

## 3.3 중앙집중 처리 시스템 vs 분산 처리 시스템
- **데이터가 집중 또는 분산되어 있는가?**
	- **<font color="#245bdb">중앙집중 처리 시스템</font>(centralized processing system)** <br>
		\: 중앙 컴퓨터에 <font color="#245bdb">데이터를 집중시켜 처리</font>하는 시스템
	- **<font color="#245bdb">분산 처리 시스템</font>(distributed processing system)** <br>
		\: 지역적으로 떨어져 있는 컴퓨터에 <font color="#245bdb">데이터를 분산시켜 처리</font>하는 시스템
<br>
<br>
<br>
<br>

# 4. 파일 관리 시스템 vs 데이터베이스 관리 시스템
## 4-1 파일 관리 시스템(File Management System)
- **파일 관리 시스템**
	- 파일을 생성, 검색, 조작할 수 있는 소프트웨어 시스템을 말함
- **파일 관리 시스템의 특성으로 인한 문제점**
	1. <span style="white-space: nowrap;"><font color="#245bdb">데이터의 중복(data redundancy)이 심각</font>하게 발생
	2. <font color="#245bdb">데이터의 불일치(data inconsistency)가 발생</font>
	3. 응용 프로그램이 파일의 형식에 종속
	4. 프로그래밍 언어마다  파일의 형식이 다름
	<img src="/images/2024-04-10-DatabaseSystem-Chapter1/Picture3.png" width="800">
<br>
<br>

## 4.2 데이터베이스 관리 시스템
- **<font color="#d83931">데이터베이스 관리 시스템(DBMS : DataBase Management System)</font>**
	- <font color="#245bdb">파일 관리 시스템의 단점을 개선하여 데이터를 통합적으로 관리하는</font> 소프트웨어 시스템을 말함
- **<font color="#d83931">데이터베이스 관리 시스템의 장점</font>**
	- <span style="white-space: nowrap;"><font color="#d83931">데이터의 중복이 줄어듦</font> -> <font color="#d83931">중복의 최소화(중복이 없어지는 것이 아님)</font>
	- <font color="#245bdb">데이터의 불일치(data inconsistency)를 피할 수 있음</font>
	- <font color="#d83931">응용 프로그램과 데이터 독립성이 유지됨</font>
	- 응용 프로그램과 데이터 형식 표준화를 기함
	- <font color="#245bdb">데이터의 접근의 보안과 무결성 유지가 용이함</font>
- **데이터베이스 관리 시스템의 단점**
	- 시스템을 이용하는 <font color="#245bdb">비용이 발생</font>함
	- 파일 관리 시스템을 이용하는 것보다 <font color="#245bdb">상대적으로 속도가 느림</font>
	<img src="/images/2024-04-10-DatabaseSystem-Chapter1/Picture4.png" width="800">
<br>
<br>


# 5. 데이터베이스 시스템 역사
## 5.1 데이터베이스 시스템 발전 이슈
<img src="/images/2024-04-10-DatabaseSystem-Chapter1/Picture5.png" width="800">
<br>
<br>

## 5.2 크기에 따른 데이터베이스 분류
<img src="/images/2024-04-10-DatabaseSystem-Chapter1/Picture6.png" width="800">
<br>
<br>

## 5.3 분산 데이터베이스 vs 분산처리
<img src="/images/2024-04-10-DatabaseSystem-Chapter1/Picture7.png" width="800"><br>
**<font color="#d83931">현재는 분산 데이터 베이스 시스템을 사용하는 추세로 가고 있다.</font>**
- **분산 데이터베이스 적용 시 장단점**
	- **<font color="#d83931">장점</font>**
		- 성능 향상
		- 신뢰성 향상
		- 지역 시스템 단위의 용이한 확장성
		- 현실세계 조직 체계와 유사성
	- **<font color="#d83931">단점</font>**
		- 복잡성 증가
		- 구축 비용 증가
		- <font color="#d83931">보안성 확보의 어려움</font> (<u>지켜야 하는 데이터베이스가 여럿이기 때문에 보안에 취약하다.</u>)
<br>
<br>

## 5.4 파일 서버 구조 vs 데이터베이스 서버 구조
<img src="/images/2024-04-10-DatabaseSystem-Chapter1/Picture8.png" width="800">
- **파일 서버 구조의 단점**
	- 네트워크 트래픽이 증가한다.
	- 클라이언트 컴퓨터는 무거운 컴퓨터이어야 한다.
	- 파일 서버가 관리하는 데이터베이스의 무결성 유지가 어렵다.
- **클라이언트(Client)** <br>
	\: 단일 사용자 컴퓨터로서 표현, 계산, 연결, 데이터베이스 서비스 등을 자체적으로 <font color="#d83931">수행</font>함
- **서버(Server)** <br>
	\: 다중 사용자 컴퓨터로 공유 메모리를 포함하여 계산, 연결, 데이터베이스 서비스 등을 <font color="#d83931">제공</font>함
- **클라이언트-서버 컴퓨팅 모델의 기대효과**
	- 응용 프로그램의 부하(load)를 분산시킴
	- 시스템의 성능을 향상시킬 수 있음
	- 소프트웨어의 유지보수 비용 절감 및 이식성 증가