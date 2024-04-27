---
layout: single
title: "Linux Programming 6주차"
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

# <font color="#336699">X윈도우 응용 프로그램 기본</font>
## <font color="#003366">GNOME 데스크톱 환경 설정</font>
### GNOME 환경
리눅스를 윈도우처럼 사용하기 위해서는 우분투의 GNOME 환경을 이용해야 한다. GNOME은 X윈도우의 오픈 데스크톱 환경이며 윈도우와 비슷하게 생겼다.
많은 리눅스에서 기본으로 사용하는 데스크톱 환경인 GNOME 배경화면 변경, 테마 설정을 실습으로 해보겠다.

#### <font color="#d83931">실습 7-1.</font> <b>X윈도우의 바탕화면, 테마 설정하기</b>
<b> 1. Server 초기화하기</b><br>
<font color="#ff7f00">1-1.</font>
X 윈도우의 바탕화면과 테마를 설정하기 위해 Server를 처음 설치 상태로 초기화한다. VMware를 종료한 후 C:\Linux\Server 폴더를 삭제하고 C:\Linux(백업)\Server 폴더를 C:\Linux\ 폴더에 통째로 복사한다.

<font color="#ff7f00">1-2.</font>
부팅하면 root 사용자로 자동 접속된다.

<b> 2. 배경화면 바꾸기</b><br>
<font color="#ff7f00">2-1.</font>
바탕화면에서 마우스 오른쪽 버튼을 클릭하여 바로가기 메뉴에서 [배경 바꾸기]를 선택한다.

<font color="#ff7f00">2-2.</font>
왼쪽의 [배경]을 클릭하면 여러 개의 배경 이미지가 나타나는데 그중에서 원하는 것을 고르고 <선택>을 클릭한다(추가적인 배경 이미지는 GNOME 사이트에서 찾을 수 있다.).

<font color="#ff7f00">2-3.</font>
이미지에서 마우스 오른쪽 버튼으로 클릭하여 [Set As Desktop Background]를 선택하면 바로 배경화면으로 설정된다. Position은 Center, Tile, Stretch 등으로 설정할 수 있다.

<b> 3. 테마 변경하기</b><br>
<font color="#ff7f00">3-1.</font>
바탕화면에서 마우스 오른쪽 버튼을 클릭하여 [터미널 열기]를 선택한다.

<font color="#ff7f00">3-2.</font>
```
apt-get -y install gnome-tweak-tool
```
위의 명령으로 관련 패키지를 설치한다.

<font color="#ff7f00">3-3.</font>
```
gnome-tweaks
```
위의 명령을 입력하여 Tweak Tool을 연다. 왼쪽에서 [모양새]를 선택하고 테마를 다음과 같이 변경한 후 종료한다.
    <img src="/images/2024-04-28-linux-report6/Picture1.png" width="800"><br>

## <font color="#336699">X윈도우 응용 프로그램의 종류</font>
### <font color="#003366">파일 브라우저</font>
X윈도우의 주요 응용 프로그램은 그리 어렵지 않게 사용이 가능하다. 노틸러스(Nautilus)는 GNOME 데스크톱 환경에서 제공되는 파일 관리자로, 윈도우의 파일 탐색기와 흡사하며 사용법도 비슷하다.

#### <font color="#d83931">실습 7-2.</font> <b>노틸러스 사용하기</b>
<b> 1. Server 초기화하기</b><br>
Server 초기화 방법은 생략한다. 하지만 가능하면 RAM을 2GB로 설정한다.

<b> 2. 노틸러스 살펴보기</b><br>
<font color="#ff7f00">2-1.</font>
[현재활동] 아래의 [파일]을 선택하거나 터미널에서 nautilus 명령을 입력하면 노틸러스가 실행되고 현재 사용자의 홈 디렉터리가 나타난다.

나머지는 윈도우와 비슷하므로 넘어가도록 하겠다.

## <font color="#003366">GNOME 데스크톱 설치</font>
### <font color="#003366">텍스트 모드에 GNOME 데스크톱 설치</font>
텍스트 모드로 설치된 Server(B) 가상머신에도 GNOME 데스크톱을 추가로 설치할 수 있다.

#### <font color="#d83931">실습 7-2.</font> <b>Server(B)에 GNOME 데스크톱 환경 추가하기</b>

{% include video id="nrNy1Ws4i1M?si" provider="youtube" %}