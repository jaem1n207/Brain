---
tags:
  - FrontEnd
---
## 브라우저의 동작 원리
브라우저가 하나의 화면을 그려내는 이 과정을 중요 렌더링 경로(Critical Rendering Path)라고 부릅니다.
우리가 일상적으로 접하는 주소창에 `URL`을 입력하고, 엔터키를 치면 브라우저는 해당 서버에 요청을 보내게 됩니다. 서버에서는 응답으로 HTML 데이터를 내려주는데, 이 HTML 데이터를 실제 우리가 보는 화면으로 그리기까지 브라우저는 다음 단계를 거쳐 작업을 진행합니다. 이 과정의 각 단계가 최대한 효율적으로 이루어지도록 만드는 것을 보통 `최적화`라고 부릅니다.

![[critical-rendering-path]]

1. 서버에서 응답으로 받은 HTML 데이터를 파싱합니다.
2. HTML을 파싱한 결과로 DOM Tree를 만듭니다.
3. 파싱하는 중 CSS 파일 링크를 만나면 CSS 파일을 요청해서 받아옵니다.
4. CSS 파일을 읽어서 CSSOM(CSS Object Model)을 만듭니다.
5. DOM Tree와 CSSOM이 모두 만들어지면 이 둘을 사용해 Render Tree를 만듭니다.
6. Render Tree에 있는 각각의 노드들이 화면의 어디에 어떻게 위치할 지를 계산하는 Layout 과정을 거쳐서,
7. 화면에 실제 픽셀을 Paint합니다.

각 단계에 대한 자세한 내용은 [브라우저는 웹페이지를 어떻게 그리나요?](https://m.post.naver.com/viewer/postView.nhn?volumeNo=8431285&memberNo=34176766)블로그를 참고해주세요.