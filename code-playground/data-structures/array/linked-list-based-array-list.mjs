import { hasCycle } from './has-cycle.mjs';

class ArrayList {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.push(item);
  }

  get(index) {
    return this.data[index];
  }

  size() {
    return this.data.length;
  }

  removeAt(index) {
    return this.data.splice(index, 1);
  }
}

class LinkedList {
  constructor() {
    this.list = new ArrayList();
  }

  append(value) {
    const newNode = { value, next: null };
    const size = this.list.size();
    if (size === 0) {
      this.list.add(newNode);
    } else {
      const lastNode = this.list.get(size - 1);
      lastNode.next = size;
      this.list.add(newNode);
    }
  }

  delete(value) {
    const size = this.list.size();
    for (let i = 0; i < size; i++) {
      const node = this.list.get(i);
      if (node.value === value) {
        this.list.removeAt(i);
        for (let j = i; j < this.list.size(); j++) {
          const nextNode = this.list.get(j);
          if (nextNode.next !== null) nextNode.next--;
        }
        return;
      }
    }
  }

  print() {
    let currentNodeIndex = 0;
    while (currentNodeIndex !== null && currentNodeIndex < this.list.size()) {
      const node = this.list.get(currentNodeIndex);
      console.log(node.value);
      currentNodeIndex = node.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.delete(2);
linkedList.print(); // Outputs: 1, 3, 4

// test hasCycle
const testLinkedList = new LinkedList();
testLinkedList.append(1);
testLinkedList.append(2);
testLinkedList.append(3);
testLinkedList.append(4);
testLinkedList.append(5);
testLinkedList.append(6);

console.log(hasCycle(testLinkedList)); // false

testLinkedList.list.get(5).next = 2;

console.log(hasCycle(testLinkedList)); // true
