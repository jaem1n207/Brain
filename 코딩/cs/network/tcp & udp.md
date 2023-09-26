---
tags:
  - network
  - tcp
  - udp
---
데이터의 순서가 바뀌지 않으면서 데이터가 유실되지 않도록 가급적 빠르게 데이터를 보내려면 네트워크 프로토콜을 어떻게 설계해야 할까요? TCP/IP는 이런 고민 아래 설계된 것입니다.
## UDP
데이터를 전송하기 전에 연결을 설정하지 않고 초기 설정 없이 데이터그램만 보냅니다. 
- 신뢰할 수 없음: 전송된 데이터가 상대방에서 수신된다는 보장이 없습니다. 
- 순서대로 전달 x: ㅅ
- 흐름 제어 없음: 발신자가 네트워크 상태를 조정하지 않고 데이터그램을 내보내므로 잠재적으로 패킷 손실이 발생할 수도 있습니다.
- 
## TCP

## 참고
- [Jbee/Interview_Question_for_Beginner](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/Network/README.md#tcp%EC%99%80-udp%EC%9D%98-%EB%B9%84%EA%B5%90)
- [d2-TCP/IP 네트워크 스택 이해하기](https://d2.naver.com/helloworld/47667)