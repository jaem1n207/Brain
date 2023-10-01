---
tags:
  - coding
  - JavaScript
---
## 문제 맛보기 
무엇이 출력 될까요?
```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```
- A: `Lydia` 그리고 `undefined`
- B: `Lydia` 그리고 `ReferenceError`
- C: `ReferenceError` 그리고 `21`
- D: `undefined` 그리고 `ReferenceError`

**답**

---

###### [2. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#2-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` 그리고 `0 1 2`
- B: `0 1 2` 그리고 `3 3 3`
- C: `3 3 3` 그리고 `0 1 2`

**답**

---

###### [3. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#3-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

- A: `20` 그리고 `62.83185307179586`
- B: `20` 그리고 `NaN`
- C: `20` 그리고 `63`
- D: `NaN` 그리고 `63`

**답**

---

###### [4. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#4-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
+true;
!'Lydia';
```

- A: `1` 그리고 `false`
- B: `false` 그리고 `NaN`
- C: `false` 그리고 `false`

**답**

---

###### [5. 답은 어느 것일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#5-%EB%8B%B5%EC%9D%80-%EC%96%B4%EB%8A%90-%EA%B2%83%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: `mouse.bird.size` 는 유효하지 않아요
- B: `mouse[bird.size]` 는 유효하지 않아요
- C: `mouse[bird['size']]` 는 유효하지 않아요
- D: 이 모든 것은 유효해요.

**답**

---

###### [6. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#6-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
```

- A: `Hello`
- B: `Hey!`
- C: `undefined`
- D: `ReferenceError`
- E: `TypeError`

**답**

---

###### [7. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#7-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: `true` `false` `true`
- B: `false` `false` `true`
- C: `true` `false` `false`
- D: `false` `true` `true`

**답**

---

###### [8. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#8-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
```

- A: `orange`
- B: `purple`
- C: `green`
- D: `TypeError`

**답**

---

###### [9. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#9-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

**답**

---

###### [10. 이렇게 하면 무슨 일이 생길까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#10-%EC%9D%B4%EB%A0%87%EA%B2%8C-%ED%95%98%EB%A9%B4-%EB%AC%B4%EC%8A%A8-%EC%9D%BC%EC%9D%B4-%EC%83%9D%EA%B8%B8%EA%B9%8C%EC%9A%94)

```js
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```

- A: 별일 없어요, 이건 완전히 괜찮아요!
- B: `SyntaxError` 이 방법으로 함수에 속성을 추가할 수 없어요.
- C: `"Woof"`이 출력돼요.
- D: `ReferenceError`

**답**

---

###### [11. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#11-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

- A: `TypeError`
- B: `SyntaxError`
- C: `Lydia Hallie`
- D: `undefined` `undefined`

**답**

---

###### [12. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#12-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
```

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` 그리고 `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` 그리고 `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` 그리고 `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` 그리고 `ReferenceError`

**답**

---

###### [13. 이벤트 전달의 3단계는 무엇일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#13-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%A0%84%EB%8B%AC%EC%9D%98-3%EB%8B%A8%EA%B3%84%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

**답**

---

###### [14. 모든 객체는 프로토 타입을 가져요.](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#14-%EB%AA%A8%EB%93%A0-%EA%B0%9D%EC%B2%B4%EB%8A%94-%ED%94%84%EB%A1%9C%ED%86%A0-%ED%83%80%EC%9E%85%EC%9D%84-%EA%B0%80%EC%A0%B8%EC%9A%94)

- A: true
- B: false

**답**

---

###### [15. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#15-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

- A: `NaN`
- B: `TypeError`
- C: `'12'`
- D: `3`

**답**

---

###### [16. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#16-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: `1` `1` `2`
- B: `1` `2` `2`
- C: `0` `2` `2`
- D: `0` `1` `2`

**답**

---

###### [17. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#17-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

- A: `"Lydia"` `21` `["", " is ", " years old"]`
- B: `["", " is ", " years old"]` `"Lydia"` `21`
- C: `"Lydia"` `["", " is ", " years old"]` `21`

**답**

---

###### [18. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#18-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```

- A: `You are an adult!`
- B: `You are still an adult.`
- C: `Hmm.. You don't have an age I guess`

**답**

---

###### [19. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#19-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

- A: `"number"`
- B: `"array"`
- C: `"object"`
- D: `"NaN"`

**답**

---

###### [20. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#20-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge();
```

- A: `21`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`

**답**

---

###### [21. `sum`의 값은 무엇일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#21-sum%EC%9D%98-%EA%B0%92%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
const sum = eval('10*10+5');
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

**답**

---

###### [22. cool_secret에 몇 시간이나 접근이 가능할까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#22-cool_secret%EC%97%90-%EB%AA%87-%EC%8B%9C%EA%B0%84%EC%9D%B4%EB%82%98-%EC%A0%91%EA%B7%BC%EC%9D%B4-%EA%B0%80%EB%8A%A5%ED%95%A0%EA%B9%8C%EC%9A%94)

```js
sessionStorage.setItem('cool_secret', 123);
```

- A: 영원히, 데이터는 사라지지 않아요.
- B: 사용자가 탭을 닫을 때.
- C: 사용자가 탭뿐만 아니라, 브라우저 전체를 닫을 때.
- D: 사용자가 자신의 컴퓨터를 종료시켰을 때.

**답**

---

###### [23. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#23-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

**답**

---

###### [24. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#24-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
```

- A: `false` `true` `false` `true`
- B: `false` `true` `true` `true`
- C: `true` `true` `false` `true`
- D: `true` `true` `true` `true`

**답**

---

###### [25. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#25-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

**답**

---

###### [26. JavaScript의 전역 실행 컨텍스트는 두가지를 만들어요: 전역객체와 "this" 키워드에요.](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#26-javascript%EC%9D%98-%EC%A0%84%EC%97%AD-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%8A%94-%EB%91%90%EA%B0%80%EC%A7%80%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EC%9A%94-%EC%A0%84%EC%97%AD%EA%B0%9D%EC%B2%B4%EC%99%80-this-%ED%82%A4%EC%9B%8C%EB%93%9C%EC%97%90%EC%9A%94)

- A: true
- B: false
- C: 경우에 따라 달라요

**답**

---

###### [27. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#27-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

- A: `1` `2`
- B: `1` `2` `3`
- C: `1` `2` `4`
- D: `1` `3` `4`

**답**

---

###### [28. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#28-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

console.log(name.giveLydiaPizza())
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

**답**

---

###### [29. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#29-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`

**답**

---

###### [30. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#30-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();
```

- A: `First` `Second` `Third`
- B: `First` `Third` `Second`
- C: `Second` `First` `Third`
- D: `Second` `Third` `First`

**답**

---

###### [31. 버튼을 클릭했을때 event.target은 무엇일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#31-%EB%B2%84%ED%8A%BC%EC%9D%84-%ED%81%B4%EB%A6%AD%ED%96%88%EC%9D%84%EB%95%8C-eventtarget%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">Click!</button>
  </div>
</div>
```

- A: 외부의 `div`
- B: 내부의 `div`
- C: `button`
- D: 중첩된 모든 요소의 배열

**답**

---

###### [32. p태그를 클릭하면 출력된 로그는 무엇일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#32-p%ED%83%9C%EA%B7%B8%EB%A5%BC-%ED%81%B4%EB%A6%AD%ED%95%98%EB%A9%B4-%EC%B6%9C%EB%A0%A5%EB%90%9C-%EB%A1%9C%EA%B7%B8%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>
```

- A: `p` `div`
- B: `div` `p`
- C: `p`
- D: `div`

**답**

---

###### [33. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#33-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const person = { name: 'Lydia' };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

- A: `undefined is 21` `Lydia is 21`
- B: `function` `function`
- C: `Lydia is 21` `Lydia is 21`
- D: `Lydia is 21` `function`

**답**

---

###### [34. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#34-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
```

- A: `"object"`
- B: `"number"`
- C: `"function"`
- D: `"undefined"`

**답**

---

###### [35. 이 값 중 어느 것이 거짓 같은 값일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#35-%EC%9D%B4-%EA%B0%92-%EC%A4%91-%EC%96%B4%EB%8A%90-%EA%B2%83%EC%9D%B4-%EA%B1%B0%EC%A7%93-%EA%B0%99%EC%9D%80-%EA%B0%92%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
```

- A: `0`, `''`, `undefined`
- B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- C: `0`, `''`, `new Boolean(false)`, `undefined`
- D: 모든 값은 거짓

**답**

---

###### [36. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#36-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

**답**

---

###### [37. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#37-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

**답**

---

###### [38. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#38-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

- A: `1` `undefined` `2`
- B: `undefined` `undefined` `undefined`
- C: `1` `1` `2`
- D: `1` `undefined` `undefined`

**답**

---

###### [39. JavaScript의 모든 것은...](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#39-javascript%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83%EC%9D%80)

- A: primitive 또는 object
- B: function 또는 object
- C: 함정 문제! objects만
- D: number 또는 object

**답**

---

###### [40. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#40-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

- A: `[0, 1, 2, 3, 1, 2]`
- B: `[6, 1, 2]`
- C: `[1, 2, 0, 1, 2, 3]`
- D: `[1, 2, 6]`

**답**

---

###### [41. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#41-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
!!null;
!!'';
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

**답**

---

###### [42. `setInterval` 메소드는 브라우저에게 무엇을 반환 할까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#42-setinterval-%EB%A9%94%EC%86%8C%EB%93%9C%EB%8A%94-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90%EA%B2%8C-%EB%AC%B4%EC%97%87%EC%9D%84-%EB%B0%98%ED%99%98-%ED%95%A0%EA%B9%8C%EC%9A%94)

```js
setInterval(() => console.log('Hi'), 1000);
```

- A: 유니크한 id
- B: 지정된 밀리초
- C: 통과된 함수
- D: `undefined`

**답**

---

###### [43. 이것은 무엇을 반환할까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#43-%EC%9D%B4%EA%B2%83%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%84-%EB%B0%98%ED%99%98%ED%95%A0%EA%B9%8C%EC%9A%94)

```js
[...'Lydia'];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

**답**

---

###### [44. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#44-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```

- A: `[0, 10], [10, 20]`
- B: `20, 20`
- C: `10, 20`
- D: `0, 10` 그리고 `10, 20`

**답**

---

###### [45. 이것은 무엇을 반환할까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#45-%EC%9D%B4%EA%B2%83%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%84-%EB%B0%98%ED%99%98%ED%95%A0%EA%B9%8C%EC%9A%94)

```js
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
```

- A: `"one"`
- B: `"two"`
- C: `"two" "one"`
- D: `"one" "two"`

**답**

---

###### [46. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#46-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);
```

- A: `null`
- B: `[null]`
- C: `[{}]`
- D: `[{ name: "Lydia" }]`

**답**

---

###### [47. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#47-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}
```

- A: `{ name: "Lydia" }, { age: 21 }`
- B: `"name", "age"`
- C: `"Lydia", 21`
- D: `["name", "Lydia"], ["age", 21]`

**답**

---

###### [48. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#48-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
console.log(3 + 4 + '5');
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

**답**

---

###### [49. `num`의 값은 무엇일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#49-num%EC%9D%98-%EA%B0%92%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
const num = parseInt('7*6', 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

**답**

---

###### [50. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#50-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
[1, 2, 3].map((num) => {
  if (typeof num === 'number') return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[ 3 x empty ]`

**답**

---

###### [51. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#51-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function getInfo(member, year) {
  member.name = 'Lydia';
  year = '1998';
}

const person = { name: 'Sarah' };
const birthYear = '1997';

getInfo(person, birthYear);

console.log(person, birthYear);
```

- A: `{ name: "Lydia" }, "1997"`
- B: `{ name: "Sarah" }, "1998"`
- C: `{ name: "Lydia" }, "1998"`
- D: `{ name: "Sarah" }, "1997"`

**답**

---

###### [52. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#52-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function greeting() {
  throw 'Hello world!';
}

function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error:', e);
  }
}

sayHi();
```

- A: `"It worked! Hello world!"`
- B: `"Oh no an error: undefined"`
- C: `SyntaxError: can only throw Error objects`
- D: `"Oh no an error: Hello world!"`

**답**

---

###### [53. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#53-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function Car() {
  this.make = 'Lamborghini';
  return { make: 'Maserati' };
}

const myCar = new Car();
console.log(myCar.make);
```

- A: `"Lamborghini"`
- B: `"Maserati"`
- C: `ReferenceError`
- D: `TypeError`

**답**

---

###### [54. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#54-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```

- A: `"undefined", "number"`
- B: `"number", "number"`
- C: `"object", "number"`
- D: `"number", "undefined"`

**답**

---

###### [55. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#55-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog('Mara');

pet.bark();

delete Dog.prototype.bark;

pet.bark();
```

- A: `"Woof I am Mara"`, `TypeError`
- B: `"Woof I am Mara"`, `"Woof I am Mara"`
- C: `"Woof I am Mara"`, `undefined`
- D: `TypeError`, `TypeError`

**답**

---

###### [56. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#56-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

**답**

---

###### [57. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#57-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
// counter.js
let counter = 10;
export default counter;
```

```js
// index.js
import myCounter from './counter';

myCounter += 1;

console.log(myCounter);
```

- A: `10`
- B: `11`
- C: `Error`
- D: `NaN`

**답**

---

###### [58. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#58-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);
```

- A: `false`, `true`
- B: `"Lydia"`, `21`
- C: `true`, `true`
- D: `undefined`, `undefined`

**답**

---

###### [59. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#59-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

**답**

---

###### [60. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#60-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

**답**

---

###### [61. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#61-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });

console.log(person);
console.log(Object.keys(person));
```

- A: `{ name: "Lydia", age: 21 }`, `["name", "age"]`
- B: `{ name: "Lydia", age: 21 }`, `["name"]`
- C: `{ name: "Lydia"}`, `["name", "age"]`
- D: `{ name: "Lydia"}`, `["age"]`

**답**

---

###### [62. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#62-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);
```

- A: `"{"level":19, "health":90}"`
- B: `"{"username": "lydiahallie"}"`
- C: `"["level", "health"]"`
- D: `"{"username": "lydiahallie", "level":19, "health":90}"`

**답**

---

###### [63. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#63-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

- A: `10`, `10`
- B: `10`, `11`
- C: `11`, `11`
- D: `11`, `12`

**답**

---

###### [64. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#64-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
```

- A: `20`, `40`, `80`, `160`
- B: `20`, `40`, `20`, `40`
- C: `20`, `20`, `20`, `40`
- D: `NaN`, `NaN`, `20`, `40`

**답**

---

###### [65. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#65-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` 그리고 `3` `3` 그리고 `6` `4`
- B: `1` `2` 그리고 `2` `3` 그리고 `3` `4`
- C: `1` `undefined` 그리고 `2` `undefined` 그리고 `3` `undefined` 그리고 `4` `undefined`
- D: `1` `2` 그리고 `undefined` `3` 그리고 `undefined` `4`

**답**

---

###### [66. `Dog` 클래스를 성공적으로 확장할 수 있는 생성자는 어느 것일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#66-dog-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%A5%BC-%EC%84%B1%EA%B3%B5%EC%A0%81%EC%9C%BC%EB%A1%9C-%ED%99%95%EC%9E%A5%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EC%83%9D%EC%84%B1%EC%9E%90%EB%8A%94-%EC%96%B4%EB%8A%90-%EA%B2%83%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};
```

- A: 1
- B: 2
- C: 3
- D: 4

**답**

---

###### [67. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#67-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
```

- A: `running index.js`, `running sum.js`, `3`
- B: `running sum.js`, `running index.js`, `3`
- C: `running sum.js`, `3`, `running index.js`
- D: `running index.js`, `undefined`, `running sum.js`

**답**

---

###### [68. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#68-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

**답**

---

###### [69. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#69-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const name = 'Lydia Hallie';
console.log(name.padStart(13));
console.log(name.padStart(2));
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `" Lydia Hallie"`, `" Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`,

**답**

---

###### [70. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#70-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
console.log('🥑' + '💻');
```

- A: `"🥑💻"`
- B: `257548`
- C: 해당 코드 주소를 포함하는 문자열
- D: 오류

**답**

---

###### [71. console.log 표현식 뒤에 언급된 값을 어떻게 출력할 수 있을까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#71-consolelog-%ED%91%9C%ED%98%84%EC%8B%9D-%EB%92%A4%EC%97%90-%EC%96%B8%EA%B8%89%EB%90%9C-%EA%B0%92%EC%9D%84-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%B6%9C%EB%A0%A5%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C%EC%9A%94)

```js
function* startGame() {
  const answer = yield 'Do you love JavaScript?';
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're gone here";
  }
  return 'JavaScript loves you back ❤️';
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` 그리고 `game.next().value`
- B: `game.next.value("Yes")` 그리고 `game.next.value()`
- C: `game.next().value` 그리고 `game.next("Yes").value`
- D: `game.next.value()` 그리고 `game.next.value("Yes")`

**답**

---

###### [72. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#72-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello`  
         `world`
- C: `Hello\nworld`
- D: `Hello\n`  
         `world`

**답**

---

###### [73. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#73-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
async function getData() {
  return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);
```

- A: `"I made it!"`
- B: `Promise {<resolved>: "I made it!"}`
- C: `Promise {<pending>}`
- D: `undefined`

**답**

---

###### [74. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#74-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function addToList(item, list) {
  return list.push(item);
}

const result = addToList('apple', ['banana']);
console.log(result);
```

- A: `['banana', 'apple']`
- B: `2`
- C: `true`
- D: `undefined`

**답**

---

###### [75. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#75-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);
```

- A: `{ x: 100, y: 20 }`
- B: `{ x: 10, y: 20 }`
- C: `{ x: 100 }`
- D: `ReferenceError`

**답**

---

###### [76. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#76-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const { name: myName } = { name: 'Lydia' };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

**답**

---

###### [77. 이것은 순수 함수일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#77-%EC%9D%B4%EA%B2%83%EC%9D%80-%EC%88%9C%EC%88%98-%ED%95%A8%EC%88%98%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
function sum(a, b) {
  return a + b;
}
```

- A: Yes
- B: No

**답**

---

###### [78. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#78-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const add = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
```

- A: `Calculated! 20` `Calculated! 20` `Calculated! 20`
- B: `Calculated! 20` `From cache! 20` `Calculated! 20`
- C: `Calculated! 20` `From cache! 20` `From cache! 20`
- D: `Calculated! 20` `From cache! 20` `Error`

**답**

---

###### [79. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#79-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}
```

- A: `0` `1` `2` `3` 그리고 `"☕"`  `"💻"` `"🍷"` `"🍫"`
- B: `"☕"`  `"💻"` `"🍷"` `"🍫"` 그리고 `"☕"`  `"💻"` `"🍷"` `"🍫"`
- C: `"☕"`  `"💻"` `"🍷"` `"🍫"` 그리고 `0` `1` `2` `3`
- D: `0` `1` `2` `3` 그리고 `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

**답**

---

###### [80. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#80-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D: `[1, 1, 1]`

**답**

---

###### [81. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#81-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

**답**

---

###### [82. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#82-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);
```

- A: `"🥑"` 그리고 `"😍"`
- B: `"🥑"` 그리고 `"😎"`
- C: `"😍"` 그리고 `"😎"`
- D: `"😎"` 그리고 `"😎"`

**답**

---

###### [83. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#83-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const person = {
  name: 'Lydia',
  age: 21,
};

let city = person.city;
city = 'Amsterdam';

console.log(person);
```

- A: `{ name: "Lydia", age: 21 }`
- B: `{ name: "Lydia", age: 21, city: "Amsterdam" }`
- C: `{ name: "Lydia", age: 21, city: undefined }`
- D: `"Amsterdam"`

**답**

---

###### [84. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#84-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

console.log(checkAge(21));
```

- A: `"Sorry, you're too young."`
- B: `"Yay! You're old enough!"`
- C: `ReferenceError`
- D: `undefined`

**답**

---

###### [85. 어떤 종류의 정보가 출력될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#85-%EC%96%B4%EB%96%A4-%EC%A2%85%EB%A5%98%EC%9D%98-%EC%A0%95%EB%B3%B4%EA%B0%80-%EC%B6%9C%EB%A0%A5%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
fetch('https://www.website.com/api/user/1')
  .then((res) => res.json())
  .then((res) => console.log(res));
```

- A: `fetch` 메소드의 결과
- B: `fetch` 메소드의 두번째 호출 결과
- C: 이전 `.then()`에서 callback된 결과
- D: 항상 undefined

**답**

---

###### [86. `true`를 인수로 전달 할 수 없도록 주어졌을 때, `hasName`을 `true`로 설정할 수 있는 방법은 어느 것일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#86-true%EB%A5%BC-%EC%9D%B8%EC%88%98%EB%A1%9C-%EC%A0%84%EB%8B%AC-%ED%95%A0-%EC%88%98-%EC%97%86%EB%8F%84%EB%A1%9D-%EC%A3%BC%EC%96%B4%EC%A1%8C%EC%9D%84-%EB%95%8C-hasname%EC%9D%84-true%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%80-%EC%96%B4%EB%8A%90-%EA%B2%83%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

**답**

---

###### [87. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#87-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
console.log('I want pizza'[0]);
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

**답**

---

###### [88. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#88-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10);
```

- A: `NaN`
- B: `20`
- C: `ReferenceError`
- D: `undefined`

**답**

---

###### [89. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#89-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
// module.js
export default () => 'Hello world';
export const name = 'Lydia';

// index.js
import * as data from './module';

console.log(data);
```

- A: `{ default: [Function (anonymous)], name: "Lydia" }`
- B: `{ default: [Function (anonymous)] }`
- C: `{ default: "Hello world", name: "Lydia" }`
- D: Global object of `module.js`

**답**

---

###### [90. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#90-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
```

- A: `"class"`
- B: `"function"`
- C: `"object"`
- D: `"string"`

**답**

---

###### [91. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#91-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

**답**

---

###### [92. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#92-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function giveLydiaPizza() {
  return 'Here is pizza!';
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype);
console.log(giveLydiaChocolate.prototype);
```

- A: `{ constructor: ...}` `{ constructor: ...}`
- B: `{}` `{ constructor: ...}`
- C: `{ constructor: ...}` `{}`
- D: `{ constructor: ...}` `undefined`

**답**

---

###### [93. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#93-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
```

- A: `name` `Lydia` 그리고 `age` `21`
- B: `["name", "Lydia"]` 그리고 `["age", 21]`
- C: `["name", "age"]` 그리고 `undefined`
- D: `Error`

**답**

---

###### [94. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#94-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

- A: `["banana", "apple", "pear", "orange"]`
- B: `[["banana", "apple"], "pear", "orange"]`
- C: `["banana", "apple", ["pear"], "orange"]`
- D: `SyntaxError`

**답**

---

###### [95. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#95-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return;
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));
```

- A: `a is bigger`, `6` 그리고 `b is bigger`, `3`
- B: `a is bigger`, `undefined` 그리고 `b is bigger`, `undefined`
- C: `undefined` 그리고 `undefined`
- D: `SyntaxError`

**답**

---

###### [96. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#96-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
class Person {
  constructor() {
    this.name = 'Lydia';
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = 'Sarah';
  }
};

const member = new Person();
console.log(member.name);
```

- A: `"Lydia"`
- B: `"Sarah"`
- C: `Error: cannot redeclare Person`
- D: `SyntaxError`

**답**

---

###### [97. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#97-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const info = {
  [Symbol('a')]: 'b',
};

console.log(info);
console.log(Object.keys(info));
```

- A: `{Symbol('a'): 'b'}` 그리고 `["{Symbol('a')"]`
- B: `{}` 그리고 `[]`
- C: `{ a: "b" }` 그리고 `["a"]`
- D: `{Symbol('a'): 'b'}` 그리고 `[]`

**답**

---

###### [98. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#98-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` 그리고 `undefined`
- B: `[1, [2, 3, 4]]` 그리고 `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` 그리고 `{ name: "Lydia", age: 21 }`
- D: `Error` 그리고 `{ name: "Lydia", age: 21 }`

**답**

---

###### [99. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#99-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const name = 'Lydia';

console.log(name());
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

**답**

---

###### [100. output의 값은 무엇일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#100-output%EC%9D%98-%EA%B0%92%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
// 🎉✨ 이번이 내 100번째 질문이에요! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`;
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

**답**

---

###### [101. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#101-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one, two, three);
```

- A: `false` `null` `[]`
- B: `null` `""` `true`
- C: `{}` `""` `[]`
- D: `null` `null` `true`

**답**

---

###### [102. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#102-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log('second');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();
```

- A: `I have resolved!`, `second` 그리고 `I have resolved!`, `second`
- B: `second`, `I have resolved!` 그리고 `second`, `I have resolved!`
- C: `I have resolved!`, `second` 그리고 `second`, `I have resolved!`
- D: `second`, `I have resolved!` 그리고 `I have resolved!`, `second`

답

---

###### [103. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#103-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const set = new Set();

set.add(1);
set.add('Lydia');
set.add({ name: 'Lydia' });

for (let item of set) {
  console.log(item + 2);
}
```

- A: `3`, `NaN`, `NaN`
- B: `3`, `7`, `NaN`
- C: `3`, `Lydia2`, `[object Object]2`
- D: `"12"`, `Lydia2`, `[object Object]2`

**답**

---

###### [104. 값은 무엇일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#104-%EA%B0%92%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
Promise.resolve(5);
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

**답**

---

###### [105. 값은 무엇일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#105-%EA%B0%92%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log('Not the same!');
  } else {
    console.log('They are the same!');
  }
}

const person = { name: 'Lydia' };

compareMembers(person);
```

- A: `Not the same!`
- B: `They are the same!`
- C: `ReferenceError`
- D: `SyntaxError`

**답**

---

###### [106. 값은 무엇일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#106-%EA%B0%92%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig.colors[1]);
```

- A: `true`
- B: `false`
- C: `undefined`
- D: `TypeError`

**답**

---

###### [107. 값은 무엇일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#107-%EA%B0%92%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
console.log('❤️' === '❤️');
```

- A: `true`
- B: `false`

**답**

---

###### [108. 다음 중 원본 배열을 수정하는 method는 무엇일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#108-%EB%8B%A4%EC%9D%8C-%EC%A4%91-%EC%9B%90%EB%B3%B8-%EB%B0%B0%EC%97%B4%EC%9D%84-%EC%88%98%EC%A0%95%ED%95%98%EB%8A%94-method%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
const emojis = ['✨', '🥑', '😍'];

emojis.map((x) => x + '✨');
emojis.filter((x) => x !== '🥑');
emojis.find((x) => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

**답**

---

###### [109. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#109-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

**답**

---

###### [110. 이 메소드는 무엇을 할까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#110-%EC%9D%B4-%EB%A9%94%EC%86%8C%EB%93%9C%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%84-%ED%95%A0%EA%B9%8C%EC%9A%94)

```js
JSON.parse();
```

- A: JSON을 JavaScript 값으로 Parses
- B: JavaScript 객체를 JSON으로 Parses
- C: 모든 JavaScript 값을 JSON으로 Parses
- D: JSON을 JavaScript 객체로만 Parses

**답**

---

###### [111. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#111-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
let name = 'Lydia';

function getName() {
  console.log(name);
  let name = 'Sarah';
}

getName();
```

- A: Lydia
- B: Sarah
- C: `undefined`
- D: `ReferenceError`

**답**

---

###### [112. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#112-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield* ['a', 'b', 'c'];
}

const one = generatorOne();
const two = generatorTwo();

console.log(one.next().value);
console.log(two.next().value);
```

- A: `a` 그리고 `a`
- B: `a` 그리고 `undefined`
- C: `['a', 'b', 'c']` 그리고 `a`
- D: `a` 그리고 `['a', 'b', 'c']`

**답**

---

###### [113. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#113-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
console.log(`${((x) => x)('I love')} to program`);
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

**답**

---

###### [114. 무슨일이 발생할까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#114-%EB%AC%B4%EC%8A%A8%EC%9D%BC%EC%9D%B4-%EB%B0%9C%EC%83%9D%ED%95%A0%EA%B9%8C%EC%9A%94)

```js
let config = {
  alert: setInterval(() => {
    console.log('Alert!');
  }, 1000),
};

config = null;
```

- A: `setInterval` 콜백은 호출되지 않을거에요
- B: `setInterval` 콜백은 한 번만 호출돼요
- C: `setInterval` 콜백은 여전히 매 초마다 호출돼요
- D: 결코 `config.alert()`를 호출 하지 않고, config 는 `null`이에요

**답**

---

###### [115. 어느 method가 값 `'Hello world!'`를 반환 할까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#115-%EC%96%B4%EB%8A%90-method%EA%B0%80-%EA%B0%92-hello-world%EB%A5%BC-%EB%B0%98%ED%99%98-%ED%95%A0%EA%B9%8C%EC%9A%94)

```js
const myMap = new Map();
const myFunc = () => 'greeting';

myMap.set(myFunc, 'Hello world!');

//1
myMap.get('greeting');
//2
myMap.get(myFunc);
//3
myMap.get(() => 'greeting');
```

- A: 1
- B: 2
- C: 2 그리고 3
- D: 모두

**답**

---

###### [116. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#116-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const person = {
  name: 'Lydia',
  age: 21,
};

const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = 'Sarah';
};

changeAge(person);
changeAgeAndName();

console.log(person);
```

- A: `{name: "Sarah", age: 22}`
- B: `{name: "Sarah", age: 23}`
- C: `{name: "Lydia", age: 22}`
- D: `{name: "Lydia", age: 23}`

**답**

---

###### [117. 다음 선택지 중 어느 것이 `6`을 반환 할까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#117-%EB%8B%A4%EC%9D%8C-%EC%84%A0%ED%83%9D%EC%A7%80-%EC%A4%91-%EC%96%B4%EB%8A%90-%EA%B2%83%EC%9D%B4-6%EC%9D%84-%EB%B0%98%ED%99%98-%ED%95%A0%EA%B9%8C%EC%9A%94)

```js
function sumValues(x, y, z) {
  return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

**답**

---

###### [118. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#118-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
let num = 1;
const list = ['🥳', '🤠', '🥰', '🤪'];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

**답**

---

###### [119. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#119-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const person = {
  firstName: 'Lydia',
  lastName: 'Hallie',
  pet: {
    name: 'Mara',
    breed: 'Dutch Tulip Hound',
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());
```

- A: `undefined` `undefined` `undefined` `undefined`
- B: `Mara` `undefined` `Lydia Hallie` `ReferenceError`
- C: `Mara` `null` `Lydia Hallie` `null`
- D: `null` `ReferenceError` `null` `ReferenceError`

**답**

---

###### [120. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#120-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
  console.log('We have to buy bananas!');
} else {
  console.log(`We don't have to buy bananas!`);
}
```

- A: We have to buy bananas!
- B: We don't have to buy bananas
- C: `undefined`
- D: `1`

**답**

---

###### [121. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#121-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const config = {
  languages: [],
  set language(lang) {
    return this.languages.push(lang);
  },
};

console.log(config.language);
```

- A: `function language(lang) { this.languages.push(lang }`
- B: `0`
- C: `[]`
- D: `undefined`

**답**

---

###### [122. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#122-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const name = 'Lydia Hallie';

console.log(!typeof name === 'object');
console.log(!typeof name === 'string');
```

- A: `false` `true`
- B: `true` `false`
- C: `false` `false`
- D: `true` `true`

**답**

---

###### [123. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#123-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const add = (x) => (y) => (z) => {
  console.log(x, y, z);
  return x + y + z;
};

add(4)(5)(6);
```

- A: `4` `5` `6`
- B: `6` `5` `4`
- C: `4` `function` `function`
- D: `undefined` `undefined` `6`

**답**

---

###### [124. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#124-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item);
  }
})();
```

- A: `Promise {1}` `Promise {2}` `Promise {3}`
- B: `Promise {<pending>}` `Promise {<pending>}` `Promise {<pending>}`
- C: `1` `2` `3`
- D: `undefined` `undefined` `undefined`

**답**

---

###### [125. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#125-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const myFunc = ({ x, y, z }) => {
  console.log(x, y, z);
};

myFunc(1, 2, 3);
```

- A: `1` `2` `3`
- B: `{1: 1}` `{2: 2}` `{3: 3}`
- C: `{ 1: undefined }` `undefined` `undefined`
- D: `undefined` `undefined` `undefined`

**답**

---

###### [126. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#126-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'mile-per-hour',
  }).format(speed);

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;
}

console.log(getFine(130, 300));
```

- A: The driver drove 130 and has to pay 300
- B: The driver drove 130 mph and has to pay $300.00
- C: The driver drove undefined and has to pay undefined
- D: The driver drove 130.00 and has to pay 300.00

**답**

---

###### [127. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#127-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const spookyItems = ['👻', '🎃', '🕸'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

**답**

---

###### [128. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#128-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const name = 'Lydia Hallie';
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));
```

- A: `true` `false` `true` `false`
- B: `true` `false` `false` `false`
- C: `false` `false` `true` `false`
- D: `false` `true` `false` `true`

**답**

---

###### [129. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#129-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const randomValue = 21;

function getInfo() {
  console.log(typeof randomValue);
  const randomValue = 'Lydia Hallie';
}

getInfo();
```

- A: `"number"`
- B: `"string"`
- C: `undefined`
- D: `ReferenceError`

**답**

---

###### [130. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#130-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const myPromise = Promise.resolve('Woah some cool data');

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error(`Oops didn't work`);
  } finally {
    console.log('Oh finally!');
  }
})();
```

- A: `Woah some cool data`
- B: `Oh finally!`
- C: `Woah some cool data` `Oh finally!`
- D: `Oops didn't work` `Oh finally!`

**답**

---

###### [131. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#131-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

**답**

---

###### [132. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#132-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
```

- A: `0`
- B: `1`
- C: `2`
- D: `3`

**답**

---

###### [133. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#133-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const myPromise = Promise.resolve(Promise.resolve('Promise!'));

function funcOne() {
  myPromise.then((res) => res).then((res) => console.log(res));
  setTimeout(() => console.log('Timeout!'), 0);
  console.log('Last line!');
}

async function funcTwo() {
  const res = await myPromise;
  console.log(await res);
  setTimeout(() => console.log('Timeout!'), 0);
  console.log('Last line!');
}

funcOne();
funcTwo();
```

- A: `Promise! Last line! Promise! Last line! Last line! Promise!`
- B: `Last line! Timeout! Promise! Last line! Timeout! Promise!`
- C: `Promise! Last line! Last line! Promise! Timeout! Timeout!`
- D: `Last line! Promise! Promise! Last line! Timeout! Timeout!`

**답**

---

###### [134. `index.js`에서 `sum.js` 안에 있는 `sum`을 호출 하려면 어떻게 해야하나요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#134-indexjs%EC%97%90%EC%84%9C-sumjs-%EC%95%88%EC%97%90-%EC%9E%88%EB%8A%94-sum%EC%9D%84-%ED%98%B8%EC%B6%9C-%ED%95%98%EB%A0%A4%EB%A9%B4-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EC%95%BC%ED%95%98%EB%82%98%EC%9A%94)

```js
// sum.js
export default function sum(x) {
  return x + x;
}

// index.js
import * as sum from './sum';
```

- A: `sum(4)`
- B: `sum.sum(4)`
- C: `sum.default(4)`
- D: Default aren't imported with `*`, only named exports

**답**

---

###### [135. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#135-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const handler = {
  set: () => console.log('Added a new property!'),
  get: () => console.log('Accessed a property!'),
};

const person = new Proxy({}, handler);

person.name = 'Lydia';
person.name;
```

- A: `Added a new property!`
- B: `Accessed a property!`
- C: `Added a new property!` `Accessed a property!`
- D: Nothing gets logged

**답**

---

###### [136. 다음 중 어느 것이 `person` 객체를 수정 할 수 있을까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#136-%EB%8B%A4%EC%9D%8C-%EC%A4%91-%EC%96%B4%EB%8A%90-%EA%B2%83%EC%9D%B4-person-%EA%B0%9D%EC%B2%B4%EB%A5%BC-%EC%88%98%EC%A0%95-%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C%EC%9A%94)

```js
const person = { name: 'Lydia Hallie' };

Object.seal(person);
```

- A: `person.name = "Evan Bacon"`
- B: `person.age = 21`
- C: `delete person.name`
- D: `Object.assign(person, { age: 21 })`

**답**

---

###### [137. 다음 중 어느 것이 `person` 객체를 수정 할 수 있을까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#137-%EB%8B%A4%EC%9D%8C-%EC%A4%91-%EC%96%B4%EB%8A%90-%EA%B2%83%EC%9D%B4-person-%EA%B0%9D%EC%B2%B4%EB%A5%BC-%EC%88%98%EC%A0%95-%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C%EC%9A%94)

```js
const person = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
};

Object.freeze(person);
```

- A: `person.name = "Evan Bacon"`
- B: `delete person.address`
- C: `person.address.street = "101 Main St"`
- D: `person.pet = { name: "Mara" }`

**답**

---

###### [138. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#138-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const add = (x) => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
```

- A: `2` `4` and `3` `6`
- B: `2` `NaN` and `3` `NaN`
- C: `2` `Error` and `3` `6`
- D: `2` `4` and `3` `Error`

**답**

---

###### [139. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#139-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
class Counter {
  #number = 10;

  increment() {
    this.#number++;
  }

  getNum() {
    return this.#number;
  }
}

const counter = new Counter();
counter.increment();

console.log(counter.#number);
```

- A: `10`
- B: `11`
- C: `undefined`
- D: `SyntaxError`

**답**

---

###### [140. 무엇이 빠졌을까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#140-%EB%AC%B4%EC%97%87%EC%9D%B4-%EB%B9%A0%EC%A1%8C%EC%9D%84%EA%B9%8C%EC%9A%94)

```js
const teams = [
  { name: 'Team 1', members: ['Paul', 'Lisa'] },
  { name: 'Team 2', members: ['Laura', 'Tim'] },
];

function* getMembers(members) {
  for (let i = 0; i < members.length; i++) {
    yield members[i];
  }
}

function* getTeams(teams) {
  for (let i = 0; i < teams.length; i++) {
    // ✨ SOMETHING IS MISSING HERE ✨
  }
}

const obj = getTeams(teams);
obj.next(); // { value: "Paul", done: false }
obj.next(); // { value: "Lisa", done: false }
```

- A: `yield getMembers(teams[i].members)`
- B: `yield* getMembers(teams[i].members)`
- C: `return getMembers(teams[i].members)`
- D: `return yield getMembers(teams[i].members)`

**답**

---

###### [141. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#141-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const person = {
  name: 'Lydia Hallie',
  hobbies: ['coding'],
};

function addHobby(hobby, hobbies = person.hobbies) {
  hobbies.push(hobby);
  return hobbies;
}

addHobby('running', []);
addHobby('dancing');
addHobby('baking', person.hobbies);

console.log(person.hobbies);
```

- A: `["coding"]`
- B: `["coding", "dancing"]`
- C: `["coding", "dancing", "baking"]`
- D: `["coding", "running", "dancing", "baking"]`

**답**

---

###### [142. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#142-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();
```

- A: `I'm pink. 🌸`
- B: `I'm pink. 🌸` `I'm a bird. 🦢`
- C: `I'm a bird. 🦢` `I'm pink. 🌸`
- D: Nothing, we didn't call any method

**답**

---

###### [143. 다음 중 어느 것의 결과가 오류일까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#143-%EB%8B%A4%EC%9D%8C-%EC%A4%91-%EC%96%B4%EB%8A%90-%EA%B2%83%EC%9D%98-%EA%B2%B0%EA%B3%BC%EA%B0%80-%EC%98%A4%EB%A5%98%EC%9D%BC%EA%B9%8C%EC%9A%94)

```js
const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 and 2
- C: 3 and 4
- D: 3

**답**

---

###### [144. `person`에 무엇을 추가해야 `[...person]`의 결과로 `["Lydia Hallie", 21]`를 얻을 수 있을까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#144-person%EC%97%90-%EB%AC%B4%EC%97%87%EC%9D%84-%EC%B6%94%EA%B0%80%ED%95%B4%EC%95%BC-person%EC%9D%98-%EA%B2%B0%EA%B3%BC%EB%A1%9C-lydia-hallie-21%EB%A5%BC-%EC%96%BB%EC%9D%84-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C%EC%9A%94)

```js
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- A: 객체는 기본적으로 반복 가능 하므로, 아무것도 하지 않아요.
- B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
- C: `*[Symbol.iterator]() { yield* Object.values(this) }`
- D: `*[Symbol.iterator]() { for (let x in this) yield this }`

**답**

---

###### [145. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#145-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

**답**

---

###### [146. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#146-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
function getFruit(fruits) {
  console.log(fruits?.[1]?.[1]);
}

getFruit([['🍊', '🍌'], ['🍍']]);
getFruit();
getFruit([['🍍'], ['🍊', '🍌']]);
```

- A: `null`, `undefined`, 🍌
- B: `[]`, `null`, 🍌
- C: `[]`, `[]`, 🍌
- D: `undefined`, `undefined`, 🍌

**답**

---

###### [147. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#147-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
class Calc {
	constructor() {
		this.count = 0 
	}

	increase() {
		this.count ++
	}
}

const calc = new Calc()
new Calc().increase()

console.log(calc.count)
```

- A: `0`
- B: `1`
- C: `undefined`
- D: `ReferenceError`

**답**

---

###### [148. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#148-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const user = {
	email: "e@mail.com",
	password: "12345"
}

const updateUser = ({ email, password }) => {
	if (email) {
		Object.assign(user, { email })
	}

	if (password) {
		user.password = password
	}

	return user
}

const updatedUser = updateUser({ email: "new@email.com" })

console.log(updatedUser === user)
```

- A: `false`
- B: `true`
- C: `TypeError`
- D: `ReferenceError`

**답**

---

###### [149. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#149-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)
```

- A: `['🍌', '🍊', '🍎']`
- B: `['🍊', '🍎']`
- C: `['🍇', '🍊', '🍎']`
- D: `['🍇', '🍌', '🍊', '🍎']`

**답**

---

###### [150. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#150-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])
```

- A: `{ emoji: "🐶", name: "Mara" }`
- B: `{ emoji: "🐈", name: "Sara" }`
- C: `undefined`
- D: `ReferenceError`

**답**

---

###### [151. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#151-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)
```

- A: `my@email.com`
- B: `new@email.com`
- C: `undefined`
- D: `ReferenceError`

**답**

---

###### [152. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#152-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))
```

- A: `[['First', 'Second'], ['Fourth']]`
- B: `[['First', 'Second'], ['Third', 'Fourth']]`
- C: `[['First', 'Second']]`
- D: `'Third'`

**답**

---

###### [153. 무엇이 `method`의 값이어야 `{ name: "Lydia", age: 22 }`를 출력할까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#153-%EB%AC%B4%EC%97%87%EC%9D%B4-method%EC%9D%98-%EA%B0%92%EC%9D%B4%EC%96%B4%EC%95%BC--name-lydia-age-22-%EB%A5%BC-%EC%B6%9C%EB%A0%A5%ED%95%A0%EA%B9%8C%EC%9A%94)

```js
const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = /* ?? */
Object[method](keys.map((_, i) => {
	return [keys[i], values[i]]
})) // { name: "Lydia", age: 22 }
```

- A: `entries`
- B: `values`
- C: `fromEntries`
- D: `forEach`

**답**

---

###### [154. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#154-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
const createMember = ({ email, address = {}}) => {
	const validEmail = /.+\@.+\..+/.test(email)
	if (!validEmail) throw new Error("Valid email pls")

	return {
		email,
		address: address ? address : null
	}
}

const member = createMember({ email: "my@email.com" })
console.log(member)
```

- A: `{ email: "my@email.com", address: null }`
- B: `{ email: "my@email.com" }`
- C: `{ email: "my@email.com", address: {} }`
- D: `{ email: "my@email.com", address: undefined }`

**답**

---

###### [155. 무엇이 출력 될까요?](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md#155-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%B6%9C%EB%A0%A5-%EB%90%A0%EA%B9%8C%EC%9A%94)

```js
let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}
```

- A: `It's not a string!`
- B: `Yay it's a string!`
- C: `TypeError`
- D: `undefined`

**답**

Copied!

기초부터 심화까지 더 많은 155개의 문제들: [JavaScript 질문](https://github.com/lydiahallie/javascript-questions/blob/master/ko-KR/README-ko_KR.md)
