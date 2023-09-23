class Stack {
  constructor() {
    this.nodes = [];
  }

  push(element) {
    this.nodes.push(element);
  }

  pop() {
    return this.nodes.pop();
  }

  peek() {
    return this.nodes.at(-1);
  }

  isEmpty() {
    return this.nodes.length === 0;
  }
}

const stack = new Stack();

stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]

console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.pop()); // 2
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 1
console.log(stack.isEmpty()); // true
console.log(stack.pop()); // undefined
console.log(stack.peek()); // undefined
