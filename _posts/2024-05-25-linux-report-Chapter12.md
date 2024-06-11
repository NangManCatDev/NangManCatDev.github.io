---
layout: single
title: "Linux Programming Chapter.12"
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

# <font color="#336699">원격 접속 서버</font>
## <font color="#003366">텔넷 서버</font>
### <font color="#003366">텔넷 서버의 개요</font>
전통적인 방법인 텔넷은 보안에 취약하기 때문에 최근에는 보안 기능을 추가하여 사용하고 있다.<br>
리눅스에서 원격 접속을 하려면 리눅스 서버에 텔넷 서버를 설치하고 원격지 PC에는 텔넷 클라이언트 프로그램을 설치해야 한다. 대부분의 운영체제에는 기본적으로 텔넷 클라이언트 프로그램이 내장되어 있으며, 아래의 그림과 같이 원격지의 PC에서 리눅스 서버에 접속하면 직접 텍스트 모드로 작업하는 것과 동일하게 작업할 수 있다.<br>
![1](/images/2024-04-09-linux-report-Chapter12/Picture1.png)<br><br>

아래의 그림은 텔넷 서버를 구축하는 과정을 요약하여 나타낸 것이다.
![2](/images/2024-04-09-linux-report-Chapter12/Picture2.png)<br><br>

#### <font color="#d83931">실습 12-1.</font> <b>텔넷 서버 설치하고 사용하기</b>
{% include video id="v_FrX-NGvCw?si" provider="youtube" %}<br><br>

## <font color="#003366">SSH 서버</font>
### <font color="#003366">SSH 서버의 개요</font>
OpenSSH 서버는 텔넷 서버와 비슷하지만 데이터를 전송할 때 패킷을 암호화한다.
![1](/images/2024-04-09-linux-report-Chapter12/Picture3.png)<br><br>

#### <font color="#d83931">실습 12-2.</font> <b>OpenSSH 서버 설치하고 사용하기</b>
{% include video id="5r-qEpAbeT4?si" provider="youtube" %}<br><br>

## <font color="#003366">VNC 서버</font>
### <font color="#003366">VNC 서버의 개요</font>
텔넷 서버와 SSH 서버를 구축하면 원격으로 대부분의 작업이 가능하지만 X 윈도우 환경을 지원하지 않기 때문에 X 윈도우 전용 명령을 사용할 수 없어 결국 텍스트 모드에서 사용 가능한 명령만 쓰게 된다.<br>
그래픽 모드로 원격 관리를 지원하는 VNC 서버는 원격지에서 X 윈도우 환경을 사용할 수 있게 해주는 서버 프로그램이다. VNC 서버는 원격지로 그래픽 화면을 전송하는 원리이므로 속도가 많이 느린 것이 단점이다.<br>

#### <font color="#d83931">실습 12-2.</font> <b>VNC 서버 설치하고 사용하기</b>
{% include video id="YHVAv4qehT8?si" provider="youtube" %}<br><br>
