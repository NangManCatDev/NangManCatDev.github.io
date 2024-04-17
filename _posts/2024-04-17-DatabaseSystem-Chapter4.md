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
- **<font color="#245bdb">질의어(query language)</font>**
	- <u>DBMS는 검색, 삽입, 삭제, 수정 등의 데이터 조작을 쉽게 하기 위해 질의어 제공</u>
	- 질의어는 <u>대체로 프로그래밍 언어보다 고급 수준</u>(사용자가 기술하고자 하는 내용을 보다 쉽고 간단한 방식으로 표현할 수 있다는 것을 의미)
	- <font color="#245bdb">절차적 언어(procedural language)와 비절차적 언어(nonprocedural language)</font>
	- 관계형 데이터베이스에서는 데이터에 대한 검색을 표현하기 위해 <font color="#245bdb">간결하고 형식적인 질의어인 관계대수(relational algebra)와 관계해석(relational calculus)을 제공</font>
	- 관계대수: 절차적 언어, 관계해석: 비절차적 언어
	- 이 언어들은 데이터베이스에서 사용하는 언어(SQL)에 대해 이론적 기반을 제공함
	- 관계대수에 대해 주로 설명
- **<font color="#245bdb">관계 데이터 연산</font>**
	    \: 1970년 E.F.Codd가 발표한 관계 데이터 모델에 포함된 연산 방법으로, 관계 대수와 관계 해석은 관계 데이터베이스를 처리하는 기능과 능력 면에서 동등하다.
- **<font color="#245bdb">관계 대수</font>**: 관계 데이터베이스의 릴레이션을 조작하기 위하여 절차를 명시하는 절차 언어(procedural language)
	1. <u>원하는 정보(what)와 그 정보를 어떻게 유도하는가(how)를 기술하는 절차적 특성</u>을 갖는다.
	2. 집합과 관계연산에 기초를 두고 있다.
	3. 프로그래밍 언어와 유사
	4. 관계 대수는 릴레이션을 처리하기 위한 연산의 집합으로 피연산자가 릴레이션이고 결과도 릴레이션이다.
- **<font color="#245bdb">관계 해석</font>**: 릴레이션에 저장된 어떤 데이터룰 조작할 것인지를 명시하는 비절차적 언어(nonprocedural language)
	1. 수학의 프레디킷 해석에 기반을 두고 있다.
	2. 얻고자 하는 결과가 무엇(what)인가를 기술하는 비절차적 언어.
	3. 튜플 관계해석과 도메인 관계해석이 있다.
    <img src="/images/2024-04-17-DatabaseSystem-Chapter4/Picture1.png" width="800"><br>