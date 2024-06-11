---
layout: single
title: "Linux Programming Chapter.13"
categories: Linux-report
tag: Linux
typora-root-url: ../
author_profile: false
#sidebar:
#    nav: "docs"
#redirect_from:
#  - 이전 경로
---
<br>

# <font color="#336699">웹 서버와 FTP 서버</font>
## <font color="#003366">APM의 개요와 설치</font>
### <font color="#003366">리눅스의 웹 서버</font>
리눅스를 많이 활용하는 분야 중 하나는 웹 서버 운영이다. 우분투에는 웹 서버 소프트웨어 중 가장 안정적이고 유명한 아파치(Apache) 웹 서버가 포함되어 있으며, 웹 프로그래밍 언어인 PHP와 MySQL 데이터베이스도 지원한다. 이 세 가지는 APM(Apache, PHP, MySQL)이라고 부르며, 리눅스 환경에서 사용할 때는 LAPM(Linux, Apache, PHP, MySQL)이라고 부른다.<br>

#### <font color="#d83931">실습 13-1.</font> <b>apt-get 명령어로 웹 서버 설치하기</b>
{% include video id="fYjRGJHVkHQ?si" provider="youtube" %}<br><br>

## <font color="#003366">XE를 활용한 웹 사이트 구축</font>
### <font color="#003366">XE 설치와 운영</font>
APM을 설치했으니 회사나 기관의 웹 사이트를 구축해보자. 여기서는 XE(XpressEngine)를 활용하려 한다. XE는 게시판, 자료실은 물론이고 블로그, 카페, 회원 관리, 플래닛 등의 기능도 포함되어 있으므로 잘 활용하면 추가 비용을 들이지 않고도 웬만한 기능을 갖춘 고급 웹 사이트를 구축할 수 있다.<br>

#### <font color="#d83931">실습 13-2.</font> <b>XE 설치하고 운영하기</b>
{% include video id="BnapLmTg-kI?si" provider="youtube" %}<br><br>

## <font color="#003366">FTP 서버 설치와 운영</font>
### <font color="#003366">vsftpd, proftpd의 설치와 운영</font>
파일 전송 서비스인 FTP(File Transfer Protocol)는 예전에는 널리 사용되었으나 FTP의 고유 기능인 파일 전송을 웹에서도 쉽게 할 수 있어 인기가 많이 떨어졌다. 하지만 성능이 매우 뛰어나 파일 전송이 목적인 사이트에서는 이 서비스를 많이 사용한다. 여기서는 우분투에서 기본적으로 제공하는 vsftpd(Very Secure FTPD)와 proftpd(Pro FTPD)를 설치하고 운영해본다.<br>
vsftpd는 리눅스와 유닉스 완경에서 보안성과 성능이 우수한 FTP 서버로, 설치하고 운영하기가 쉬워 많이 이용된다. http://vsftpd.beasts.rog/에서 관련 내용을 참고하고 소스 파일을 다운로드 할 수 있다.<br>
proftpd는 대형 사이트에서 오랫동안 인기가 많았던 FTP 서버이다. proftpd는 vsftpd와 동일한 역할을 하지만 설정 방법이 조금 다르다.

#### <font color="#d83931">실습 13-2.</font> <b>vsftpd, proftpd 설치하고 운영하기</b>
{% include video id="1nXhJVU6wFM?si" provider="youtube" %}<br><br>