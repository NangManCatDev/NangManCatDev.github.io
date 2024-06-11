---
layout: single
title: "Linux Programming Chapter.10"
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

# <font color="#336699">디스크 관리 고급</font>
## <font color="#003366">RAID의 개념과 RAID 레벨</font>
### <font color="#003366">RAID의 개념</font>
RAID는 여러 개의 디스크를 하나의 디스크처럼 사용할 수 있게 해주는 기능이다.<br>
서버 컴퓨터의 저장 장치는 대부분 하드웨어 RAID 또는 소프트웨어 RAID 방식으로 사용된다. 두 방식의 특징은 다음과 같다.

- <b>하드웨어 RAID</b><br>
    하드웨어 제조 업체가 여러 개의 디스크를 연결한 장비를 만들어서 공급하는 것을 말한다. 하드웨어 RAID는 좀 더 안정적이고 제조 업체의 기술 지원을 받을 수 있어서 좋다. 최근에는 가격이 저렴한 제품도 출시되고 있지만 성능이 좋은 제품은 상당히 비싸다. 그리고 제조 업체에 따라 조작 방법이 다를 수 있다.<br>
- <b>소프트웨어 RAID</b><br>
    고가인 하드웨어 RAID의 대안으로, 운영체제 안에서 구현되어 디스크를 관리한다. 하드웨어 RAID와 비교하면 신뢰성, 속도 등이 떨어지지만 매우 적은 비용으로 좀 더 안전하게 데이터를 저장할 수 있다.<br>

### <font color="#003366">RAID의 레벨</font>
RAID를 구성하는 방식에 따라 Linear RAID, RAID 0, RAID 1, RAID 2, RAID 3, RAID 4, RAID 5로 구분할 수 있다.<br>
그리고 디스크 1개를 하나의 볼륨(묶음)으로 사용하는 <b>단순 볼륨</b>은 RAID 방식에 포함되지 않는다.<br>

#### Linear RAID, RAID 0
최소한 2개의 디스크가 필요하다. Linear RAID와 RAID 0은 2개 이상의 디스크를 하나의 볼륨으로 사용한다는 점은 비슷하지만 저장 방식에 큰 차이가 있다.<br>
Linear RAID는 2개 이상의 디스크를 하나의 볼륨으로 사용하고, 앞 디스크에 데이터를 완전히 저장한 후 다음 디스크에 저장한다. 즉 앞 디스크에 데이터를 완전히 저장한 후 다음 디스크에 저장한다. 즉 앞 디스크에 데이터를 완전히 저장하지 않으면 다음 디스크를 사용하지 않는다.<br>

이와 달리 RAID 0은 모든 디스크를 동시에 사용한다. 예를 들어 디스크 3개를 사용하고 '한빛아카데미비기너시리즈'(12비트라고 가정)라는 내용은 저장한다면 '한'은 첫 번쨰, '빛'은 두 번째, '아'는 세 번째에 저장하는 식으로 동시에 저장하는 것이다(실제로는 비트 단위 또는 블록 단위로 저장되지만 쉽게 이해할 수 있도록 한 글자씩 저장된다고 가정했다). 이때 '동시에'라는 말은 중요한 의미가 있다.<br>

RAID 0은 디스크 3개를 동시에 사용하므로 속도가 제일 빠르다. 그러나 세 디스크 중 하나라도 고장이 나면 문제가 발생할 수 있다.<br>
Linear RAID의 장점은 각 디스크의 용량이 달라도 전체 용량을 문제없이 사용할 수 있어 공간 효율성이 100%이다.<br>

#### RAID 1
공간 효율성은 떨어지지만 디스크 2개 중 하나가 고장 나도 데이터가 손상이 되지를 않는다. 이를 결함 허용(fault-tolerance)라 한다.<br>

#### RAID 5
RAID 5는 RAID 0과 RAID 1의 두장점을 어느 정도 포용한 방식으로, 최소 3개 이상의 디스크가 있어야 구성이 가능하고 주로 5개 이상으로 구성한다.
디스크에 오류가 발생하면 패리티(parity)를 이용하여 데이터를 복구할 수 있으며, 패리티 영역에서는 데이터의 손실 여부를 점검한다.<br>
RAID 5의 장점은 어느 정도의 결함을 허용하고 저장 공간의 효율성도 좋다.

#### RAID 6
RAID 5에서는 두개 이상의 디스크가 동시에 고장이 난다면 데이터를 복구할 수 없다는 문제가 있다.<br>
RAID 6는 이러한 문제를 패리티(parity)를 2개 사용하는 것으로 극복했다. 대신 공간 효율성과 속도는 떨어진다.<br>

## <font color="#003366">RAID 구축을 위한 준비</font>
### <font color="#003366">RAID 구축을 위한 하드웨어 구성</font>
![1](/images/2024-04-09-linux-report-Chapter10/Picture1.png)

RAID의 하드웨어 환경은 그림과 같다.<br>


## <font color="#003366">RAID의 다양한 레벨 구축</font>
#### <font color="#d83931">실습 10-1.</font> <b>Linear RAID 구축하기</b>
{% include video id="b0-orf4V2TY?si" provider="youtube" %}<br><br>

#### <font color="#d83931">실습 10-2.</font> <b>RAID 0, 1, 5 구축하기</b>
{% include video id="8WsnI7x4BK4?si" provider="youtube" %}<br><br>