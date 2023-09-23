class Queue {
  constructor() {
    this.nodes = [];
  }

  enqueue(value) {
    this.nodes.push(value);
  }

  dequeue() {
    return this.nodes.shift();
  }

  isEmpty() {
    return this.nodes.length === 0;
  }
}

const queue = new Queue();

queue.enqueue(1); // [1]
queue.enqueue(2); // [1, 2]
queue.enqueue(3); // [1, 2, 3]

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.isEmpty()); // false
console.log(queue.dequeue()); // 3
console.log(queue.isEmpty()); // true
console.log(queue.dequeue()); // undefined
