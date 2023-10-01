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

## Document Object Model
웹에서는 수많은 이벤트가 발생하고 흐릅니다.
- 브라우저(user agent)로부터 발생하는 이벤트
- 사용자의 행동(interaction)에 의해 발생하는 이벤트
- DOM의 '변화'로 인해 발생하는 이벤트

발생하는 이벤트는 그저 자바스크립트 객체일 뿐입니다. 브라우저의 Event Interface에 맞춰 구현된 객체인 것이죠.

여러 DOM Element로 구성된 하나의 웹 페이지는 Window를 최상위로 하는 트리를 생성하게 됩니다. 결론부터 말하자면 이벤트는 이벤트 각각이 갖게 되는 전파 경로(propagation path)를 따라 전파됩니다. 그리고 이 전파 경로는 DOM Tree 구조에서 Element의 위상(hierarchy)에 의해 결정이 됩니다.
DOM에 대한 더 자세한 스펙을 살펴보려면 [스펙 살펴보기: Document Object Model Event](https://jbee.io/web/about-event-in-the-web/)를 참고해주세요.

## CORS
CORS는 페이지에서 실행되는 스크립트에서 다른 출처로 이루어진 요청을 제어하기 위해 웹 브라우저에서 구현하는 보안 기능입니다. 기본적으로 한 원본의 웹 스크립트는 동일 원본 정책으로 인해 다른 원본에서 리소스를 가져올 수 없습니다. 이 제한은 악성 사이트가 다른 사이트의 민감한 데이터를 읽는 것을 방지하기 위해 적용됩니다.

예를 들어, 은행 웹사이트에 로그인한 다음 다른 탭에서 악성 웹사이트를 방문한다고 가정해보겠습니다. 동일 출처 정책이 없으면 악성 사이트는 잠재적으로 JavaScript를 실행하여 은행 잔고를 읽거나 자격 증명을 사용하여 은행 사이트에서 승인되지 않은 거래를 할 수 있습니다.

다양한 출처에서 리소스를 안전하고 통제된 공유를 가능하게 하기 위해 CORS 사양이 도입되었습니다. 이를 통해 서버는 리소스에 액세스할 수 있는 사람(즉, 어느 출처)을 정의할 수 있습니다.

사이트가 JavaScript(예: AJAX 요청)를 사용하여 다른 출처에서 리소스를 가져오려고 하면 브라우저는 실제 요청이 허용되는지 확인하기 위해 **preflight request**(메서드 사용 `OPTIONS`)을 서버에 보냅니다. 서버는 요청 사이트의 원본이 허용되는지 여부를 나타내는 적절한 CORS 헤더로 응답합니다.

CORS 관련 문제가 발생하는 경우 다른 원본에서 리소스를 가져오려고 시도하고 서버가 원본을 허용하도록 적절한 CORS 헤더를 설정하지 않았을 가능성이 높습니다. 할 수 있는 작업은 다음과 같습니다.
1. Server Side:
	1. `Access-Control-Allow-Origin: <origin>`특정 출처를 허용하도록 적절한 헤더를 설정하면 됩니다.
	2. 쿠키나 HTTP 인증을 지원해야 하는 경우 `Access-Control-Allow-Credentials: true`로 설정하면 됩니다. 이 경우 `*`와 같은 와일드카드를 사용할 수 없으며, 정확한 출처를 지정해야 합니다.
2. Client Side: (보안 문제로 인해 프롣)
	1. 프록시 서버 사용: 클라이언트가 프록시에 요청을 보낸 다음 프록시는 브라우저 제한을 우회하여 대상 서버로 요청을 보냅니다.
	2. JSONP 사용: 이는 동일 출처 정책의 허점을 이용하는 오래된 기술(Query v.1.2 이상부터 `jsonp`형태가 지원되어 ajax 를 호출할 때 타 도메인간 호출이 가능)입니다. JSONP는 `GET`요청만 지원하므로 위험할 수 있습니다.

## 참고
- [d2-브라우저는 어떻게 동작하는가?](https://d2.naver.com/helloworld/59361)
- [카카오웹툰은 하드웨어 가속과 IntersectionObserver를 어떻게 사용했을까?](https://fe-developers.kakaoent.com/2021/211202-gpu-intersection-observer/)
- [JBEE-Interview_Question_for_Beginner](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/FrontEnd/README.md#document-object-model)