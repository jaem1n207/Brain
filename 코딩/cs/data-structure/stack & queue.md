---
tags:
  - ADT
  - Data-Structure
---
스택과 큐는 공통점이 많습니다. 하나의 요소와 다른 요소, 그리고 또 다른 요소를 갖는다는 점에서 **선형 자료 구조**입니다. 또 둘 다 크기가 유연하므로 처음에 50과 같은 크기로 할당할 필요가 없습니다. 작업하면서 요소를 추가한 다음 축소할 수도 있습니다. 주요 차이점은 요소가 스택이나 큐에서 제거되는 방식에 있습니다.
## Stack
- 데이터를 추가할 수 있는 **선형** 자료 구조입니다.
- **마지막으로 들어간 원소가 먼저 나옵니다.** 이 특징을 후입선출(Last In First Out)이라고 부릅니다.
- 추가는 **push**, 제거는 **pop**, 마지막으로 추가한 데이터를 확인하는 **peek** 등의 작업을 할 수 있습니다.
### 코드
```js

```
### Stack 두 개로 Queue 자료구조 구현해보기
### Stack으로 괄호 유효성 체크 코드 구현해보기

## Queue
- **먼저 들어간 원소가 먼저 나옵니다.** 이 특징을 선입선출(First In First Out)이라고 부릅니다.
### 코드
```js
class Queue {
  constructor() {
    this.nodes = []
  }

  enqueue(value) {
    this.nodes.push(value)
  }

  dequeue() {
    return this.nodes.shift()
  }

  isEmpty() {
    return this.nodes.length === 0
  }
}

const queue = new Queue()

queue.enqueue(1) // [1]

queue.enqueue(2) // [1, 2]

queue.enqueue(3) // [1, 2, 3]

console.log(queue.dequeue()) // 1
console.log(queue.dequeue()) // 2
console.log(queue.isEmpty()); // false
console.log(queue.dequeue()) // 3
console.log(queue.isEmpty()) // true
console.log(queue.dequeue()) // undefined

```

## 참고
