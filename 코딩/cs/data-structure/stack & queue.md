---
tags:
  - ADT
  - Data-Structure
---
스택과 큐는 공통점이 많습니다. 하나의 요소와 다른 요소, 그리고 또 다른 요소를 갖는다는 점에서 **선형 자료 구조**입니다. 또 둘 다 크기가 유연하므로 처음에 50과 같은 크기로 할당할 필요가 없습니다. 작업하면서 요소를 추가한 다음 축소할 수도 있습니다. 주요 차이점은 요소가 스택이나 큐에서 제거되는 방식에 있습니다.

## Stack
- 데이터를 추가할 수 있는 **선형** 자료 구조입니다.
- **마지막으로 들어간 원소가 먼저 나옵니다.** 이 특징을 후입선출(Last In First Out)이라고 부릅니다.
- 데이터 추가는 **push**, 제거는 **pop**, 스택의 가장 위에 있는 항목을 확인하는 **peek** 등의 작업을 할 수 있습니다.

- [I] 스택은 서로 관계가 있는 여러 작업을 연달아 수행하면서 **이전의 작업 내용을 저장해 둘 필요가 있을 때** 사용됩니다.

아래는 스택을 간단히 구현한 코드와 사용한 예시 두 가지입니다.
### 코드
```js
class Stack {
  constructor() {
    this.nodes = []
  }

  push(element) {
    this.nodes.push(element)
  }

  pop() {
    return this.nodes.pop()
  }

  peek() {
    return this.nodes.at(-1)
  }

  isEmpty() {
    return this.nodes.length === 0
  }
}

const stack = new Stack()

stack.push(1) // [1]

stack.push(2) // [1, 2]

stack.push(3) // [1, 2, 3]

console.log(stack.pop()) // 3
console.log(stack.peek()) // 2
console.log(stack.pop()) // 2
console.log(stack.isEmpty()) // false
console.log(stack.pop()) // 1
console.log(stack.isEmpty()) // true
console.log(stack.pop()) // undefined
console.log(stack.peek()) // undefined
```
### Stack 두 개로 Queue 자료구조 구현해보기
```js
class Queue {
  constructor() {
    this.stackNewestOnTop = []

    this.stackOldestOnTop = []
  }

  isEmptyArray(array) {
    return array.length === 0
  }

  enqueue(value) {
    this.stackNewestOnTop.push(value)
  }

  shiftStacks() {
    if (this.isEmptyArray(this.stackOldestOnTop)) {
      while (!this.isEmptyArray(this.stackNewestOnTop)) {
        this.stackOldestOnTop.push(this.stackNewestOnTop.pop())
      }
    }
  }

  dequeue() {
    this.shiftStacks()

    return this.stackOldestOnTop.pop()
  }
}

const queue = new Queue()

queue.enqueue(1) // [1]

queue.enqueue(2) // [1, 2]

queue.enqueue(3) // [1, 2, 3]

console.log(queue.dequeue()) // 1
console.log(queue.dequeue()) // 2
console.log(queue.dequeue()) // 3
```
### Stack으로 괄호 유효성 체크 코드 구현해보기
```js
const isBalancedTokens = (str) => {
  const tokens = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]

  const stack = []

  const isOpenToken = (token) => {
    return tokens.some((pair) => pair[0] === token)
  }

  const matches = (openToken, closeToken) => {
    return tokens.some(
      (pair) => pair[0] === openToken && pair[1] === closeToken
    )
  }

  const isBalanced = (stack) => {
    return stack.length === 0
  }

  for (let token of str) {
    if (isOpenToken(token)) {
      stack.push(token)
    } else {
      const openToken = stack.pop()

      if (!matches(openToken, token)) {
        return false
      }
    }
  }

  return isBalanced(stack)
}

console.log(`isBalancedTokens('()')`, isBalancedTokens("()")) // true
console.log(`isBalancedTokens('()[]{}')`, isBalancedTokens("()[]{}")) // true
console.log(`isBalancedTokens('(]')`, isBalancedTokens("(]")) // false
console.log(`isBalancedTokens('([)]')`, isBalancedTokens("([)]")) // false
console.log(`isBalancedTokens('{[]}')`, isBalancedTokens("{[]}")) // true
console.log(`isBalancedTokens('')`, isBalancedTokens("")) // true
console.log(`isBalancedTokens('[')`, isBalancedTokens("[")) // false
```

## Queue
- 데이터를 추가할 수 있는 **선형** 자료 구조입니다.
- **먼저 들어간 원소가 먼저 나옵니다.** 이 특징을 선입선출(First In First Out)이라고 부릅니다.
- 데이터 추가는 **enqueue**, 제거는 **dequeue** 등의 작업을 할 수 있습니다.

- [I] 큐는 **순서대로 처리해야 하는 작업을 임시로 저장해두는 버퍼**로서 많이 사용됩니다.

아래는 큐를 간단히 구현한 코드와 큐를 이용해 힙 자료구조를 구현하는 코드입니다.

> [!NOTE] 알아두어야 할 것
> 힙에는 큐에서 지원되지 않는 구조적인 속성(완전 이진 트리)와 작업(힙파이)이 있기 때문에 큐를 사용해서 힙을 구현하는 게 일반적이진 않습니다. 하지만 큐를 사용하여 트리의 레벨 순서대로 선회하고 힙 속성을 유지함으로써 어느 정도 구현할 수 있습니다. 예시 코드에서는 두 개의 큐를 사용해서 Min-Heap 자료구조를 구현합니다.
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
### Queue로 Heap 자료구조 구현해보기
```js
class MinHeap {
  constructor() {
    this.queue = []

    this.size = 0
  }

  insert(value) {
    this.queue.push(value)

    this.size++

    this.bubbleUp()
  }

  extractMin() {
    if (this.size === 0) {
      throw new Error("Heap is empty")
    }

    const min = this.queue[0]

    this.queue[0] = this.queue[this.size - 1]

    this.queue.pop()

    this.size--

    this.bubbleDown(0)

    return min
  }

  // 삽입 후 힙 속성을 유지하기 위한 헬퍼 메소드
  bubbleUp() {
    let index = this.size - 1

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)

      if (this.queue[index] < this.queue[parentIndex]) {
		 [this.queue[index], this.queue[parentIndex]] = [
		  this.queue[parentIndex], this.queue[index]];
		  index = parentIndex
      } else {
        break
      }
    }
  }

  // 추출 후 힙 속성을 유지하기 위한 헬퍼 메소드
  bubbleDown(index) {
    while (true) {
      let leftChildIdx = 2 * index + 1

      let rightChildIdx = 2 * index + 2

      let swapIdx = null

      if (
        leftChildIdx < this.size &&
        this.queue[leftChildIdx] < this.queue[index]
      ) {
        swapIdx = leftChildIdx
      }

      if (
        rightChildIdx < this.size &&
        this.queue[rightChildIdx] <
          (swapIdx === null ? this.queue[index] : this.queue[leftChildIdx])
      ) {
        swapIdx = rightChildIdx
      }

      if (swapIdx === null) break

      ;[this.queue[index], this.queue[swapIdx]] = [
        this.queue[swapIdx],
        this.queue[index],
      ]

      index = swapIdx
    }
  }
}

const heap = new MinHeap()

heap.insert(5)

heap.insert(2)

heap.insert(8)

heap.insert(1)

console.log(heap.extractMin()) // 1
console.log(heap.extractMin()) // 2

```

## 참고
- [HackerRank Youtube Channel](https://www.youtube.com/watch?v=IhJGJG-9Dx8&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=1&ab_channel=HackerRank)