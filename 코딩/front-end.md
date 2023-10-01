---
tags:
  - FrontEnd
---
## 브라우저의 동작 원리
브라우저가 하나의 화면을 그려내는 이 과정을 중요 렌더링 경로(Critical Rendering Path)라고 부릅니다.
우리가 일상적으로 접하는 주소창에 `URL`을 입력하고, 엔터키를 치면 브라우저는 해당 서버에 요청을 보내게 됩니다. 서버에서는 응답으로 HTML 데이터를 내려주는데, 이 HTML 데이터를 실제 우리가 보는 화면으로 그리기까지 브라우저는 다음 단계를 거쳐 작업을 진행합니다. 이 과정의 각 단계가 최대한 효율적으로 이루어지도록 만드는 것을 보통 `최적화`라고 부릅니다.

<img src='https://github.com/jaem1n207/Brain/blob/main/Excalidraw/front-end/critical-rendering-path.svg' />
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
- `requestAnimationFrame`을 사용하기
- 활성화될 때를 알고 있기

## CSS 방법론 - [JBEE](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/FrontEnd/README.md#css-methodology)
`SMACSS`, `OOCSS`, `BEM` 방법론에 대해서 소개한다.
### SMACSS(Scalable and Modular Architecture for CSS)
`SMACSS`의 핵심은 범주화이며(`categorization`) 스타일을 다섯 가지 유형으로 분류하고, 각 유형에 맞는 선택자(selector)와 작명법(naming convention)을 제시한다.

- 기초(Base)
    - element 스타일의 default 값을 지정해주는 것이다. 선택자로는 요소 선택자를 사용한다.
- 레이아웃(Layout)
    - 구성하고자 하는 페이지를 컴포넌트를 나누고 어떻게 위치해야하는지를 결정한다. `id`는 CSS 에서 클래스와 성능 차이가 없는데, CSS 에서 사용하게 되면 재사용성이 떨어지기 때문에 클래스를 주로 사용한다.
- 모듈(Module)
    - 레이아웃 요소 안에 들어가는 더 작은 부분들에 대한 스타일을 정의한다. 클래스 선택자를 사용하며 요소 선택자는 가급적 피한다. 클래스 이름은 적용되는 스타일의 내용을 담는다.
- 상태(States)
    - 다른 스타일에 덧붙이거나 덮어씌워서 상태를 나타낸다. 그렇기 때문에 자바스크립트에 의존하는 스타일이 된다. `is-` prefix 를 붙여 상태를 제어하는 스타일임을 나타낸다. 특정 모듈에 한정된 상태는 모듈 이름도 이름에 포함시킨다.
- 테마(Theme)
    - 테마는 프로젝트에서 잘 사용되지 않는 카테고리이다. 사용자의 설정에 따라서 css 를 변경할 수 있는 css 를 설정할 때 사용하게 되며 접두어로는 `theme-`를 붙여 표시한다.
### OOCSS(Object Oriented CSS)
객체지향 CSS 방법론으로 2 가지 기본원칙을 갖고 있다.

- 원칙 1. 구조와 모양을 분리한다.
    - 반복적인 시각적 기능을 별도의 스킨으로 정의하여 다양한 객체와 혼합해 중복코드를 없앤다.
- 원칙 2. 컨테이너와 컨텐츠를 분리한다.
    - 스타일을 정의할 때 위치에 의존적인 스타일을 사용하지 않는다. 사물의 모양은 어디에 위치하든지 동일하게 보여야 한다.
### BEM(Block Element Modifier)
웹 페이지를 각각의 컴포넌트의 조합으로 바라보고 접근한 방법론이자 규칙(Rule)이다. SMACSS 가 가이드라인이라는 것에 비해서 좀 더 범위가 좁은 반면 강제성 측면에서 다소 강하다고 볼 수 있다. BEM 은 CSS 로 스타일을 입힐 때 id 를 사용하는 것을 막는다. 또한 요소 셀렉터를 통해서 직접 스타일을 적용하는 것도 불허한다. 하나를 더 불허하는데 그것은 바로 자손 선택자 사용이다. 이러한 규칙들은 재사용성을 높이기 위함이다.

- Naming Convention
    - 소문자와 숫자만을 이용해 작명하고 여러 단어의 조합은 하이픈(`-`)과 언더바(`_`)를 사용하여 연결한다.
- BEM 의 B 는 “Block”이다.
    - 블록(block)이란 재사용 할 수 있는 독립적인 페이지 구성 요소를 말하며, HTML 에서 블록은 class 로 표시된다. 블록은 주변 환경에 영향을 받지 않아야 하며, 여백이나 위치를 설정하면 안된다.
- BEM 의 E 는 “Element”이다.
    - 블록 안에서 특정 기능을 담당하는 부분으로 block_element 형태로 사용한다. 요소는 중첩해서 작성될 수 있다.
- BEM 의 M 는 “Modifier”이다.
    - 블록이나 요소의 모양, 상태를 정의한다. `block_element-modifier`, `block—modifier` 형태로 사용한다. 수식어에는 불리언 타입과 키-값 타입이 있다.

## normalize vs reset - [JBEE](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/FrontEnd/README.md#normalize-vs-reset)
브라우저마다 기본적으로 제공하는 element 의 style 을 통일시키기 위해 사용하는 두 `css`에 대해 알아본다.
### [reset.css](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/FrontEnd/README.md#resetcss)

`reset.css`는 기본적으로 제공되는 브라우저 스타일 전부를 **제거** 하기 위해 사용된다. `reset.css`가 적용되면 `<H1>~<H6>`, `<p>`, `<strong>`, `<em>` 등 과 같은 표준 요소는 완전히 똑같이 보이며 브라우저가 제공하는 기본적인 styling 이 전혀 없다.
### [normalize.css](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/FrontEnd/README.md#normalizecss)

`normalize.css`는 브라우저 간 일관된 스타일링을 목표로 한다. `<H1>~<H6>`과 같은 요소는 브라우저간에 일관된 방식으로 굵게 표시됩니다. 추가적인 디자인에 필요한 style 만 CSS 로 작성해주면 된다.

즉, `normalize.css`는 모든 것을 "해제"하기보다는 유용한 기본값을 보존하는 것이다. 예를 들어, sup 또는 sub 와 같은 요소는 `normalize.css`가 적용된 후 바로 기대하는 스타일을 보여준다. 반면 `reset.css`를 포함하면 시각적으로 일반 텍스트와 구별 할 수 없다. 또한 normalize.css 는 reset.css 보다 넓은 범위를 가지고 있으며 HTML5 요소의 표시 설정, 양식 요소의 글꼴 상속 부족, pre-font 크기 렌더링 수정, IE9 의 SVG 오버플로 및 iOS 의 버튼 스타일링 버그 등에 대한 이슈를 해결해준다.
### [그 외 프론트엔드 개발 환경 관련](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/FrontEnd/README.md#%EA%B7%B8-%EC%99%B8-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B4%80%EB%A0%A8)

- 웹팩(webpack)이란?
    
    - 웹팩은 자바스크립트 애플리케이션을 위한 모듈 번들러입니다. 웹팩은 의존성을 관리하고, 여러 파일을 하나의 번들로 묶어주며, 코드를 최적화하고 압축하는 기능을 제공합니다.
    - [https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html#%EC%9B%B9%ED%8C%A9%EC%9D%B4%EB%9E%80](https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html#%EC%9B%B9%ED%8C%A9%EC%9D%B4%EB%9E%80)
- 바벨과 폴리필이란?
    
    - 바벨(Babel)은 자바스크립트 코드를 변환해주는 트랜스 컴파일러입니다. 최신 자바스크립트 문법으로 작성된 코드를 예전 버전의 자바스크립트 문법으로 변환하여 호환성을 높이는 역할을 합니다.
        
        이 변환과정에서 브라우저별로 지원하는 기능을 체크하고 해당 기능을 대체하는 폴리필을 제공하여 이를 통해 크로스 브라우징 이슈도 어느정도 해결할 수 있습니다.
        
    - 폴리필(polyfill)은 현재 브라우저에서 지원하지 않는 최신기능이나 API를 구현하여, 오래된 브라우저에서도 해당 기능을 사용할 수 있도록 해주는 코드조각입니다.

## 그 외 프론트엔드 개발 환경 관련 - [JBEE](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/FrontEnd/README.md#%EA%B7%B8-%EC%99%B8-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B4%80%EB%A0%A8)
- 웹팩(webpack)이란?
    
    - 웹팩은 자바스크립트 애플리케이션을 위한 모듈 번들러입니다. 웹팩은 의존성을 관리하고, 여러 파일을 하나의 번들로 묶어주며, 코드를 최적화하고 압축하는 기능을 제공합니다.
    - [https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html#%EC%9B%B9%ED%8C%A9%EC%9D%B4%EB%9E%80](https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html#%EC%9B%B9%ED%8C%A9%EC%9D%B4%EB%9E%80)
- 바벨과 폴리필이란?
    
    - 바벨(Babel)은 자바스크립트 코드를 변환해주는 트랜스 컴파일러입니다. 최신 자바스크립트 문법으로 작성된 코드를 예전 버전의 자바스크립트 문법으로 변환하여 호환성을 높이는 역할을 합니다.
        
        이 변환과정에서 브라우저별로 지원하는 기능을 체크하고 해당 기능을 대체하는 폴리필을 제공하여 이를 통해 크로스 브라우징 이슈도 어느정도 해결할 수 있습니다.
        
    - 폴리필(polyfill)은 현재 브라우저에서 지원하지 않는 최신기능이나 API를 구현하여, 오래된 브라우저에서도 해당 기능을 사용할 수 있도록 해주는 코드조각입니다.

## 참고
- [d2-브라우저는 어떻게 동작하는가?](https://d2.naver.com/helloworld/59361)
- [카카오웹툰은 하드웨어 가속과 IntersectionObserver를 어떻게 사용했을까?](https://fe-developers.kakaoent.com/2021/211202-gpu-intersection-observer/)
- [JBEE-Interview_Question_for_Beginner](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/FrontEnd/README.md#document-object-model)
- [크로스 브라우징 이슈에 대응하는 프론트엔드 개발자들의 전략](http://asfirstalways.tistory.com/237)