---
tags:
  - JavaScript
---
## JS Event Loop
이벤트 루프는 모든 비동기 콜백을 처리합니다. 콜백은 다른 코드가 실행되는 동안 루프 대기열에 추가되며 각 코드에 대한 응답이 수신되면 하나씩 실행됩니다.

이벤트 루프를 사용하면 JavaScript가 단일 스레드라는 사실에도 불구하고 Node.js가 non-blocking I/O 작업을 수행할 수 있습니다.
## 호이스팅 - [JBEE](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/JavaScript/README.md#hoisting)
- [I] ES6 문법이 표준화가 되면서 크게 신경쓰지 않아도 되는 부분이 되었지만, JS라는 언어의 특성을 가장 잘 보여주는 특성 중 하나입니다.

`hoist` 라는 단어의 사전적 정의는 끌어올리기 라는 뜻이다. 자바스크립트에서 끌어올려지는 것은 변수이다. `var` keyword 로 선언된 모든 변수 선언은 **호이스트** 된다. 호이스트란 변수의 정의가 그 범위에 따라 `선언`과 `할당`으로 분리되는 것을 의미한다. 즉, 변수가 함수 내에서 정의되었을 경우, 선언이 함수의 최상위로, 함수 바깥에서 정의되었을 경우, 전역 컨텍스트의 최상위로 변경이 된다.

우선, 선언(Declaration)과 할당(Assignment)을 이해해야 한다. 끌어올려지는 것은 선언이다.

```js
function getX() {
  console.log(x); // undefined
  var x = 100;
  console.log(x); // 100
}
getX();
```

다른 언어의 경우엔, 변수 x 를 선언하지 않고 출력하려 한다면 오류를 발생할 것이다. 하지만 자바스크립트에서는 `undefined`라고 하고 넘어간다. `var x = 100;` 이 구문에서 `var x;`를 호이스트하기 때문이다. 즉, 작동 순서에 맞게 코드를 재구성하면 다음과 같다.

```js
function getX() {
  var x;
  console.log(x);
  x = 100;
  console.log(x);
}
getX();
```

선언문은 항시 자바스크립트 엔진 구동시 가장 최우선으로 해석하므로 호이스팅 되고, **할당 구문은 런타임 과정에서 이루어지기 때문에** 호이스팅 되지 않는다.

함수가 자신이 위치한 코드에 상관없이 함수 선언문 형태로 정의한 함수의 유효범위는 전체 코드의 맨 처음부터 시작한다. 함수 선언이 함수 실행 부분보다 뒤에 있더라도 자바스크립트 엔진이 함수 선언을 끌어올리는 것을 의미한다. 함수 호이스팅은 함수를 끌어올리지만 변수의 값은 끌어올리지 않는다.

```js
foo();
function foo(){
  console.log(‘hello’);
};
// console> hello
```

foo 함수에 대한 선언을 호이스팅하여 global 객체에 등록시키기 때문에 `hello`가 제대로 출력된다.

```js
foo();
var foo = function() {
  console.log(‘hello’);
};
// console> Uncaught TypeError: foo is not a function
```

이 두번째 예제의 함수 표현은 함수 리터럴을 할당하는 구조이기 때문에 호이스팅 되지 않으며 그렇기 때문에 런타임 환경에서 `Type Error`를 발생시킨다.

- `var`로 선언된 변수의 경우 초기화가 아닌 선언만 호이스트됩니다. 초기화 전에 액세스하면 `undefined`를 반환합니다.
- 함수 표현식은 호이스트되지 않지만, 함수 선언은 호이스팅됩니다.
- ES6 `let`, `const`의 경우에도 호이스트가 발생하지만 선언 전에 호이스트에 액세스하면 `ReferenceError`가 발생합니다.
## 이벤트 위임
이벤트 위임은 단일 공통 조상에게 이벤트를 위임하는 기술입니다. 이벤트 버블링으로 인해 이벤트는 이를 수신할 수 있는 루트까지 각 조상 요소에 대해 핸들러를 점진적으로 실행하여 DOM 트리에 **버블링**됩니다.

DOM 이벤트는 `Event.target`을 통해 이벤트를 시작한 요소에 대한 유용한 정보를 제공합니다. 이를 통해 부모 요소는 부모의 모든 자식이나 부모 자체가 아닌 대상 요소가 이벤트를 수신하는 것처럼 동작을 처리할 수 있습니다.

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
- [JavaScript의 Event Loop](http://asfirstalways.tistory.com/362)
- [JBEE/Interview_Question_for_Beginner](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/JavaScript/README.md#part-2-2-javascript)