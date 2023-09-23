class MinHeap {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  insert(value) {
    this.queue.push(value);
    this.size++;
    this.bubbleUp();
  }

  extractMin() {
    if (this.size === 0) {
      throw new Error('Heap is empty');
    }

    const min = this.queue[0];
    this.queue[0] = this.queue[this.size - 1];
    this.queue.pop();
    this.size--;
    this.bubbleDown(0);

    return min;
  }

  // 삽입 후 힙 속성을 유지하기 위한 헬퍼 메서드
  bubbleUp() {
    let index = this.size - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.queue[index] < this.queue[parentIndex]) {
        [this.queue[index], this.queue[parentIndex]] = [this.queue[parentIndex], this.queue[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 추출 후 힙 속성을 유지하기 위한 헬퍼 메서드
  bubbleDown(index) {
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let swapIdx = null;

      if (leftChildIdx < this.size && this.queue[leftChildIdx] < this.queue[index]) {
        swapIdx = leftChildIdx;
      }
      if (
        rightChildIdx < this.size &&
        this.queue[rightChildIdx] < (swapIdx === null ? this.queue[index] : this.queue[leftChildIdx])
      ) {
        swapIdx = rightChildIdx;
      }
      if (swapIdx === null) break;

      [this.queue[index], this.queue[swapIdx]] = [this.queue[swapIdx], this.queue[index]];
      index = swapIdx;
    }
  }
}

const heap = new MinHeap();

heap.insert(5);
heap.insert(2);
heap.insert(8);
heap.insert(1);

console.log(heap.extractMin()); // 1
console.log(heap.extractMin()); // 2
