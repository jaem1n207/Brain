---
tags:
  - Rendering
---

Render의 큰 특징 중 하나는 가상돔입니다. 이를 통해 DOM에 변경 사항이 생기면 가상돔과 비교해 바뀐 부분에 대해서만 실제 DOM에 적용합니다.

`ReactDOM.createRoot()`를 통해 매번 새로운 웹 페이지를 구성할 DOM을 생성하는 게 아닌, 이전에 렌더링 되었던 컴포넌트라면 새로 렌더링되는 것이 아니라 업데이트만 시켜줍니다. 이때 효율적인 업데이트를 위해 `React의 DOM diffing` 알고리즘을 사용합니다. (또한 동시 렌더러를 활성화합니다.)

앱이 hydration과 함께 서버 측 렌더링을 사용하는 경우 `ReactDOM.hydrateRoot()`를 사용하면 됩니다. (`createRoot()`와 달리 별도의 `root.render()`호출이 필요하지 않습니다.)

`ReactDOM.hydrateRoot()` 및 `ReactDOMServer` 등은 React에서 SSR 적용을 위한 렌더링 설정으로, 웹팩 및 바벨 등에서 여러가지 설정들을 수반해야 합니다. 따라서 SSR 적용을 더욱 수비게 적용하기 위해 사용하는 것이 `Next.js` 프레임워크입니다.

## Hydration
Next.js는 서버에서 HTML을 문자열로 가져온(ReactDOMServer.renderToString) 후에, 클라이언트에서 서버에서 보내준 HTML을 `hydrate()`혹은 `render()`하여 브라우저에 렌더링됩니다. 이렇게 서버의 데이터가 클라이언트의 DOM과 결합하는 과정을 **Hydration**이라 합니다.

React는 클라이언트 렌더링만 있어서 유저에게 보여줄 HTML, CSS 그리고 JS 모두 `render()`함수를 이용해 생성하여, React가 어떤 DOM을 렌더하는지 알려줍니다.
반면, Next.js는 서버에서 보여줄 HTML 컨텐츨르 가져오기 때문에 재차 `render()`함수로 HTML을 생성하여 DOM을 그리는 일은 비효율적입니다. 따라서 `hydrate()`함수로 서버에서 받아온 HTML에 유저가 상호작용할 수 있는 이벤트 리스너만 연결하는 것입니다.

아래 표는 3번의 시도 중 평균값을 구한 값입니다.

|           | webpack | webpack:{lazyCompilation: entries: false} | vite |
|:--------- | ------- | ----------------------------------------- | ---- |
| lazy-5000 | 20s     | 0.7s                                      | 18s  |
| lazy-1000 |         |                                           |      |
| 5000      |         |                                           |      |
| 1000      |         |                                           |      |

### 참고
- [Hydration](https://velog.io/@pjh1011409/React-Query-HydrationSSR)
- [Next Code 분석](https://www.howdy-mj.me/next/hydrate)