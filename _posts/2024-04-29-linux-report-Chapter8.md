---
layout: single
title: "Linux Programming Chapter.8"
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

# <font color="#336699">X 윈도우 응용 프로그램 고급</font>
## <font color="#003366">우분투 소프트웨어 센터</font>
### <font color="#003366">우분투 소프트웨어 센터</font>
우분투에는 '우분투 소프트웨어 센터'라는 응용 프로그램 스토어가 존재하고 이 곳에는 수천 개 이상의 무료 및 상용 소프트웨어를 판매하고 있으며, 원하는 소프트웨어를 검색하여 간단히 설치 할 수 있다. <br><br>
<b>[현재 활동]-[우분투 소프트웨어]</b>를 선택하고 필요한 소프트웨어를 검색하여 설치하면 된다. <br>
우분투 소프트웨어센터에서 검색되는 패키지는 터미널에서 <b>apt-get</b> 명령으로 설치해도 된다.

### <font color="#003366">우분투의 다양한 소프트웨어</font>
우분투에 기본으로 포함되어 있지는 않지만, 유용하게 사용할 수 있는 소프트웨어 몇 개를 소개하면 <br><br>
<b>- 포커스라이터(FocusWriter)</b>: 글쓰기에 집중하는 간단한 워드프로세서로, 단순한 배경을 제공하여 직관적인 글쓰기를 도와준다.<br>
<b>- 지파더(gPodder)</b>: 팟캐스트를 검색하고 관리할 수 있는 프로그램이다.<br>
<b>- 파이참(PyCharm) EDU</b>: 파이썬 프로그래밍을 위한 통합 IDE 소프트웨어이다.<br>
<b>- 지파티드(GParted)</b>: 하드디스크의 파티션을 그래픽 화면으로 처리하는 기능을 제공한다.<br>
<b>- 시냅틱 패키지 관리자(Synaptic Package Manager)</b>: 그래픽 환경에서의 패키지 관리 도구로, GUI 모드에서 편리하게 패키지 설치, 삭제, 업그레이드 등을 수행할 수 있다.<br>
<b>- 핀타(Pinta)</b>: 이미지 편집 도구인 핀타는 GIMP보다 간단하고, 윈도우 환경에 익숙한 사용자에게 편리한 인터페이스를 제공한다.<br><br>


## <font color="#003366">KDE 데스크톱 설치와 사용</font>
우분투의 기본 데스크톱은 GNOME이지만, KDE 데스크톱을 설치하여 사용할 수도 있다.<br>

#### <font color="#d83931">실습 8-1.</font> <b>KDE 데스크톱 설치하기</b>
<b> 1. Server 초기화하기</b><br>
<font color="#ff7f00">1-1.</font>
Server을 처음 설치 상태로 초기화한다. VMware를 종료한 후 C:\Linux\Server 폴더를 삭제하고 C:\Linux(백업)\Server 폴더를 C:\Linux\ 폴더에 통째로 복사한다.

<font color="#ff7f00">1-2.</font>
부팅하면 root 사용자로 자동 접속된다.

<b> 2. kubuntu-desktop 패키지 설치하기</b><br>
<font color="#ff7f00">2-1.</font>
업데이트된 패키지가 설치되도록 먼저 /etc/apt/source.list 파일을 수정한다. 터미널을 열고 vi 에디터나 gedit으로 /etc/apt/source.list 파일을 열어 다음과 같이 각각의 두 번째 행을 'bionix-updates'로 수정한 후 저장한다.

<font color="#ff7f00">2-2.</font>
<b>apt-get update</b> 명령으로 변경 내용을 저장한다.

<font color="#ff7f00">2-3.</font>
<b>apt-get -y install kubuntu-desktop</b> 명령으로 KDE Plasma를 설치한다.

<font color="#ff7f00">2-4.</font>
패키지 설정 창이 나타나면 <확인>을 클릭하여 진행한다.

<font color="#ff7f00">2-5.</font>
기본 화면 관리자로 'sddm'을 선택하고 <확인>을 클릭한다.

<font color="#ff7f00">2-6.</font>
설치가 완료되면 <b>reboot</b> 명령으로 재부팅한다.

<b> 3. KDE 데스크톱 사용하기</b><br>
<font color="#ff7f00">3-1.</font>
왼쪽 아래의 '데스크톱 세션'으로 'Plasma'를 선택한 후 ubuntu의 암호인 'ubuntu'를 입력하고 <로그인>을 클릭한다.

{% include video id="PXChUh9JmdE?si" provider="youtube" %}<br>

## <font color="#003366">리눅스에 윈도우 설치</font>
### <font color="#003366">가상머신 안에 가상머신 생성</font>
리눅스에서 윈도우 응용 프로그램을 사용하는 방법중 가장 확실한 방법은 가상머신 소프트웨어를 이용하는 것이다.<br>
리눅스에서 가동 가능한 가상머신 소프트웨어는 VMware for Linux, Oracle VirtualBox for Linux, KVM/Qemu, Xen 등이 있으며, 우분투에서 자체적으로 제공하는 가상머신 소프트웨어도 있다.<br>
여기서는 우분투에서 설치 가능한 Oracle VirtualBox를 설치해보도록 한다.<br><br>

#### <font color="#d83931">실습 8-1.</font> <b>KDE 데스크톱 설치하기</b>
{% include video id="Fkp5FJBZLjQ?si" provider="youtube" %}<br>