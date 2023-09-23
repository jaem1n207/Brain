class Queue {
  constructor() {
    this.stackNewestOnTop = [];
    this.stackOldestOnTop = [];
  }

  isEmptyArray(array) {
    return array.length === 0;
  }

  enqueue(value) {
    this.stackNewestOnTop.push(value);
  }

  shiftStacks() {
    if (this.isEmptyArray(this.stackOldestOnTop)) {
      while (!this.isEmptyArray(this.stackNewestOnTop)) {
        this.stackOldestOnTop.push(this.stackNewestOnTop.pop());
      }
    }
  }

  dequeue() {
    this.shiftStacks();
    return this.stackOldestOnTop.pop();
  }
}

const queue = new Queue();

queue.enqueue(1); // [1]
queue.enqueue(2); // [1, 2]
queue.enqueue(3); // [1, 2, 3]

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
