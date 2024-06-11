---
layout: single
title: "Linux Programming Chapter.9"
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

# <font color="#336699">디스크 관리 기본</font>
## <font color="#003366">디스크와 파티션</font>
### <font color="#003366">SATA 장치와 SCSI 장치 구성</font>
우분투에 하드디스크(또는 SSD)를 할당하는 쿼터(quota)에 대해 알아보도록 한다.<br>
이 장에서는 하드디스크와 SSD를 디스크라고 묶어서 부르도록 하겠다.

## <font color="#003366">디스크 추가</font>
### <font color="#003366">디스크 하나 추가</font>
리눅스에서 디스크를 추가하는 것은 윈도우만큼 간단하지 않다.<br>
실습을 진행하면서 알아보도록 하겠다.<br>

#### <font color="#d83931">실습 9-1.</font> <b>디스크 하나 장착하고 사용하기</b>
<b> 1. Server 초기화하기</b><br>
<font color="#ff7f00">1-1.</font>
Server을 처음 설치 상태로 초기화한다. VMware를 종료한 후 C:\Linux\Server 폴더를 삭제하고 C:\Linux(백업)\Server 폴더를 C:\Linux\ 폴더에 통째로 복사한다.

<b> 2. 디스크 추가하기</b><br>
<font color="#ff7f00">2-1.</font>
SCSI 0:1(/dev/sdb)에 디스크를 하나 장착한다. VMware 화면의 가상머신 목록에서 Server를 선택하고 [Edit virtual machine settings]를 클릭한다.

<font color="#ff7f00">2-2.</font>
[Virtual Machine Settings] 창에서 왼쪽 아래의 <Add>를 클릭한다.

<font color="#ff7f00">2-3.</font>
[Hardware Type] 창에서는 'Hard Disk'가 선택된 상태로 <Next>를 클릭한다.

<font color="#ff7f00">2-4.</font>
[Select a Disk Type] 창에서는 Virtual disk type으로 'SCSI(Recommended)'가 선택된 상태로 <Next>를 클릭한다.

<font color="#ff7f00">2-5.</font>
[Select a Disk] 창에서는 'Create a new virtual disk'가 선택된 상태로 <Next>를 클릭한다.

<font color="#ff7f00">2-6.</font>
[Specify Disk Capacity] 창에서는 Maximum disk size (GB)에 '(원하는 저장공간 크기)'를 입력하고 'Store virtual disk as a single file'을 선택한 후 <Next>를 클릭한다.

<font color="#ff7f00">2-7.</font>
[Specity Disk File] 창에서는 그대로 두고 <Finish>를 클릭한다.

<font color="#ff7f00">2-8.</font>
[Virtual Machine Settings] 창의 왼쪽에 SCSI 디스크가 추가되었다. 새로 장착한 SCSI 디스크를 선택하고 <Advanced>를 클릭하면 장착되었음을 확인할 수 있다.

<b> 3. 부팅하기</b><br>
<font color="#ff7f00">3-1.</font>
이제 Server를 부팅한다. 부팅 중 VMware 화면 오른쪽 위에 있는 아이콘을 보면 디스크 2개가 장착된 것을 확인할 수 있다.

<b> 4. 파티션 할당하기</b><br>
<font color="#ff7f00">4-1.</font>
장착한 디스크에 순서대로 파티션을 할당하기 위해 터미널을 열고 다음과 같이 입력한다.
```
# fdisk /dev/sdb        -- SCSI 0:1 디스크 선택
Coomand: n              -- 새로운 파티션 분할
Select: p               -- Primary 파티션 선택
Partition number: 1     -- 파티션 1번 선택(Primary 파티션은 최대 4개까지 생성 가능)
First sector: enter     -- 시작 섹터 번호 입력(파티션 하나만 할당하므로 첫 섹터로 설정)
Last sector: enter      -- 마지막 섹터 번호 입력(파티션 하나만 할당하므로 마지막 섹터로 설정)
Command: p              -- 설정 내용 확인
Command: w              -- 설정 내용 저장
```

<b> 5. 파일 시스템 생성하기</b><br>
<font color="#ff7f00">5-1.</font>
할당된 파티션 장치의 이름은 /dev/sdb1이 된다. 파일 시스템을 ext4 형식으로 생성하는데, 이 과정이 포맷이라고 생각하면 된다. <b>mkfs -t 파일시스템 파티션장치</b> 명령이나 간단히 <b>mkfs.파일시스템 파티션장치</b> 명령을 입력하고 <b>mkfs.ext4 /dev/sdb1</b> 명령을 실행한다.

<b> 6. 디렉터리에 마운트하기</b><br>
<font color="#ff7f00">6-1.</font>
/dev/sdb1 파일 시스템을 사용하기 위해 디렉터리에 마운트한다. 먼저 <b> mkdir /mydata</b> 명령을 입력하여 마운트할 /mydata 디렉터리를 만든다. 그리고 <b>cp /boot/vm[tab]/mydata/file1</b> 명령을 입력하여 파일 이름을 file1로 바꾸어 /mydata 디렉터리에 복사한다. 다른 파일의 이름을 바꾸어 복사해도 상관없다. <b>ls -l /mydata</b> 명령을 입력하면 file1이 복사된 것을 확인할 수 있고, /mydata 디렉터리에 있는 file1 파일은 기존의 /dev/sdb1에 저장된 상태이다.

<font color="#ff7f00">6-2.</font>
<b>mount /dev/sdb1/mydata</b> 명령을 입력하여 포맷이 완료된 /dev/sdb1 장치를 /mydata 디렉터리에 마운트하고, <b>ls -l /mydata<b> 명령으로 /mydata 디렉터리를 확인한다. 그리고 <b>cp /boot/vm[tab]/mydata/file2</b> 명령을 입력하여 파일의 이름을 file2로 바꾸어 /mydata 디렉터리에 복사한다. <b>ls -l /mydata</b> 명령을 입력하면 file2 파일이 복사된 것을 확인할 수 있다.

<font color="#ff7f00">6-3.</font>
이제 /mydata 디렉터리는 /dev/sda1이 아니라 /dev/sdb1에 있다. /mydata 디렉터리에 어떤 파일을 복사하는 것은 /dev/sdb1 장치에 파일을 저장한다는 의미이다. 복사한 file2 파일은 다음과 같이 /dev/sdb1 장치에 저장되어 있다. /dev/sda1에 있던 file1 파일은 없어진 것이 아니라, /mydata 디렉터리가 /dev/sbd1에 마운트되었기 때문에 잠시 /dev/sda1에 숨어 있다고 생각하면 된다.

<font color="#ff7f00">6-4.</font>
<b>umount /dev/sdb1</b> 명령으로 /dev/sdb1의 마운트를 해제하고, file1 파일이 그대로 있는지 <b>ls -l /mydata</b> 명령으로 확인한다.

<font color="#ff7f00">6-5.</font>
file1 파일이 원상 복구되었다. file2 파일은 없어진 것이 아니라 /dev/sdb1에 보관되어 있으며, 언제든지 /dev/sdb1을 디렉터리에 마운트하면 다시 file2 파일을 사용할 수 있다.

<b> 7. 자동 마운트하기</b><br>
<font color="#ff7f00">7-1.</font>
컴퓨터를 켰을 때 /dev/sdb1 장치가 항상 /mydata에 마운트되어 있도록 설정해보자. /etc/fstab 파일을 vi 에디터나 gedit으로 열고 끝부분에 다음 내용을 추가한다.
```
/dev/sdb1   /mydata     /ext4   defualts    0   0
```

<font color="#ff7f00">7-2.</font>
수정한 /etc/fstab 파일을 저장하고 <b>reboot</b> 명령으로 재부팅한다.

<font color="#ff7f00">7-3.</font>
터미널을 열고 <b>ls -l /mydata</b> 명령을 입력하면 file2 파일을 확인할 수 있다.<br>
{% include video id="NQdTAfVQDB4?si" provider="youtube" %}<br><br>


## <font color="#003366">사용자별 공간 할당</font>
### <font color="#003366">공간 할당</font>
여러 사용자가 동시에 접속해서 사용하는 리눅스에서 루트(/) 파일시스템에 디스크를 꽉 채운다면 시스템 전체가 가동되지 않는 치명적인 문제가 발생할 수 있다.<br>
이러한 문제를 방지하기 위해 사용자별로 할당된 공간만 사용하도록 용량을 제한할 수 있다.

### <font color="#003366">쿼터의 개념</font>
일반 사용자가 사용하는 파일 시스템을 루트(/)로 지정하기보다는 별도의 파일 시스템을 지정하고 그것만 사용하게 하면 여러모로 유익하다.
또한 쿼터는 여러명의 사용자가 동시에 디스크를 읽고 쓰는 작업이 발생할 수 있는데, 이때 발생하는 성능 저하를 막아준다.<br>
쿼터는 '각 사용자가 사용할 수 있는 파일의 용량을 제한하는 것'이라고 간단히 정의할 수 있다.<br>

#### <font color="#d83931">실습 9-1.</font> <b>디스크 하나 장착하고 사용하기</b>
{% include video id="zHdyVWNrKkY?si" provider="youtube" %}<br><br>