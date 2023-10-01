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
2. Client Side: (보안 문제로 인해 프로덕션에서는 권장되지 않습니다.)
	1. 프록시 서버 사용: 클라이언트가 프록시에 요청을 보낸 다음 프록시는 브라우저 제한을 우회하여 대상 서버로 요청을 보냅니다.
	2. JSONP 사용: 이는 동일 출처 정책의 허점을 이용하는 오래된 기술(Query v.1.2 이상부터 `jsonp`형태가 지원되어 ajax 를 호출할 때 타 도메인간 호출이 가능)입니다. JSONP는 `GET`요청만 지원하므로 위험할 수 있습니다.
3. Dev Environments
	1. 개발 목적으로 `CORS Everywhere`브라우저에서 동일 출처 정책을 비활성화하거나 비활성화하는 것과 같은 브라우저 확장 또는 도구를 사용할 수 있습니다(이렇게 하면 보안 취약점이 발생하므로 주의). 그러나 프로덕션 환경이나 매일 탐색하는 브라우저 프로필에서는 이러한 기능을 사용하지 않아야 합니다.

## 크로스 브라우징
웹 표준에 따라 개발을 하여 서로 다른 OS 또는 플랫폼에 대응하는 것을 말합니다. 즉, 브라우저의 렌더링 엔진이 다른 경우에 인터넷이 이상없이 구현되도록 하는 기술입니다. 웹 사이트를 서로 비슷하게 만들어 어떤 환경에서도 이상없이 작동하게 하는데 그 목적이 있습니다. 즉, 어느 한쪽에 최적화되어 치우치지 않도록 공통요소를 사용하여 웹 페이지를 제작하는 방법을 의미합니다.

### 크로스 브라우징 이슈에 대응하는 다양한 방법
1. 적용 기능의 지원 브라우저를 파악하기
   개발 기획 시에 우리가 개발할 기능들을 정의하고, 그 기능들을 **지원할 브라우저를 우선 파악**합니다.
2. 모든 환경에서 지원해야 한다면 라이브러리를 이용하기
   polyfill, underscore 등 라이브러리는 호환성 이슈를 해결하기 위한 아주 좋은 전략입니다. 대신 라이브러리를 잘 관리해야하는 비용이 생기기 때문에 주의해야 합니다.
3. 직접 구현할 시에는 '기능 탐지'를 이용하기
   각 브라우저에서 지원하는 함수, 메소드, 그리고 기능들이 다르기 때문에, if 문을 통해서 분기를 설정한 다음 함수를 적용해야 합니다. `feature detection`이라는 방법을 통해 굳이 어떤 브라우저인지 우리가 알 필요 없이 해당 브라우저에 내가 제공하고자 하는 기능이 있는지를 확인하면 됩니다.
4. 여러 도구를 활용하기
   웹 표준을 지키고 있는지 검사하려면 Can I use?, HTML5 Markup Validation Service, CSS-Validator 등의 사이트를 통해 검사
   reset.css or normalize.css를 사용해서 브라우저의 기본 스타일이 제각각인 경우에 대해 초기화를 시킵니다.
   prefix를 적어줄 수도 있습니다. 아직 웹 표준이 안 된 기능을 브라우저들이 가져다 지원하기 때문에 기능 앞에 각 브라우저들의 엔진을 prefix로 적어주는 것입니다. 주의할 점으로는 접두어가 없는 속성은 가장 나중에 추가해줘야 합니다.
```css
#menu {
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
}
```

## 서버 사이드 렌더링과 클라이언트 사이드 렌더링
http://asfirstalways.tistory.com/244
https://ykss.netlify.app/translation/everything_i_wish_i_knew_before_moving_50000_lines_of_code_to_react_server_components/

## 사이트 성능을 높이기 위한 기술
### 리소스 전달 최적화
- CDN 사용
- 동시 커넥션 수를 최소화
- 중요한 에셋을 미리 로드하여 로딩 속도 향상
- `HTML5 App cache` 활용
- `gzip` 또는 `brotli`압축을 사용
- `meta-refresh` 사용 금지
- `3.xx` 리다이렉트를 피할 것
### 효율적인 마크업 구조 구축
- `@import`의 사용은 피하기
- `inline`스타일과 `embedded`스타일은 피하기
- 중복되는 코드 최소화
- 단일 프레임워크 사용
- Third Party 스크립트 삽입 x
### 이미지 최적화
- ImageOptim 등 도구를 사용해 이미지 압축
- 애니메이션 GIF를 비디오로 대체하여 페이지를 더 빠르게 로드
- 반응형 이미지 제공
- 올바른 크기의 이미지 제공
- WebP 이미지 사용
- 이미지 CDN을 사용해 이미지 최적화
### WebFonts 최적화
- 글꼴 로드 중 보이지 않는 텍스트 방지
- WebFont 로딩 및 렌더링 최적화
- WebFont 크기 줄이기
### JS 최적화
- 오래 걸리는 작업 최적화
- 코드 분할: JS 페이로드 줄이기
- 사용하지 않는 코드 제거
- 네트워크 페이로드 축소 및 압축
- DOM에 대한 접근 최소화: DOM manipulate는 느림
- ECMAScript 모듈 구문을 사용하기: CJS는 tree shaking에 영향을 줌
### 미디어 사용 개선
- 이미지 스프라이트를 사용
- 실제 이미지 해상도 사용
- 작은 크기의 이미즈는 DataURL 사용
- 비디오의 미리보기 이미지 만들기
### CSS 최적화
- 중요하지 않은 CSS 연기
- CSS 축소
- 중요한 CSS 추출
- 미디어 쿼리로 CSS 배경 이미지 최적화
### 애플리케이션의 작동원리 알고 있기
- Timer 사용에 유의하기
- `requestAnimationFrame`을 사

## 참고
- [d2-브라우저는 어떻게 동작하는가?](https://d2.naver.com/helloworld/59361)
- [카카오웹툰은 하드웨어 가속과 IntersectionObserver를 어떻게 사용했을까?](https://fe-developers.kakaoent.com/2021/211202-gpu-intersection-observer/)
- [JBEE-Interview_Question_for_Beginner](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/FrontEnd/README.md#document-object-model)
- [크로스 브라우징 이슈에 대응하는 프론트엔드 개발자들의 전략](http://asfirstalways.tistory.com/237)