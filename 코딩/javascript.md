---
tags:
  - JavaScript
---
## JS Event Loop
이벤트 루프는 모든 비동기 콜백을 처리합니다. 콜백은 다른 코드가 실행되는 동안 루프 대기열에 추가되며 각 코드에 대한 응답이 수신되면 하나씩 실행됩니다.

이벤트 루프를 사용하면 JavaScript가 단일 스레드라는 사실에도 불구하고 Node.js가 non-blocking I/O 작업을 수행할 수 있습니다.
## 호이스팅 - [JBEE](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/JavaScript/README.md#hoisting)
- [I] ES6 문법이 표준화가 되면서 크게 신경쓰지 않아도 되는 부분이 되었지만, JS라는 언어의 특성을 가장 잘 보여주는 특성 중 하나입니다.
- 호이스팅은 컴파일 단계 중에 변수 및 함수 선언이 스코프 맨 위로 이동되는 프로세스를 의미합니다. 즉, 변수와 함수는 선언되기 전에 사용할 수 있습니다.
- `var`로 선언된 변수의 경우 초기화가 아닌 선언만 호이스트됩니다. 초기화 전에 액세스하면 `undefined`를 반환합니다.
- 함수 표현식은 호이스트되지 않지만, 함수 선언은 호이스팅됩니다.
- ES6 `let`, `const`의 경우에도 호이스트가 발생하지만 선언 전에 호이스트에 액세스하면 `ReferenceError`가 발생합니다.
## 이벤트 위임
이벤트 위임은 단일 공통 조상에게 이벤트를 위임하는 기술입니다. 이벤트 버블링으로 인해 이벤트는 이를 수신할 수 있는 루트까지 각 조상 요소에 대해 핸들러를 점진적으로 실행하여 DOM 트리에 **버블링**됩니다.

DOM 이벤트는 를 통해 이벤트를 시작한 요소에 대한 유용한 정보를 제공합니다 `Event.target`. 이를 통해 부모 요소는 부모의 모든 자식이나 부모 자체가 아닌 대상 요소가 이벤트를 수신하는 것처럼 동작을 처리할 수 있습니다.

이는 두 가지 주요 이점을 제공합니다.

- 잠재적으로 수천 개의 요소를 처리하기 위해 단일 이벤트 리스너만 등록하면 되므로 성능이 향상되고 메모리 소비가 줄어듭니다.
- 요소가 상위 요소에 동적으로 추가되면 해당 요소에 대해 새 이벤트 리스너를 등록할 필요가 없습니다.

```js
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", handleButtonClick)
})
```

이벤트 위임에는 하위 대상이 원하는 요소와 일치하는지 확인하기 위한 `if`문 사용이 포함됩니다.

```js
document.addEventListener("click", e => {
  if (e.target.closest("button")) {
    handleButtonClick()
  }
})
```

## 참고
- [JavaSCript의 Event Loop](http://asfirstalways.tistory.com/362)