function heapifyUp() {
  // 추가된 가장 마지막 노드의 인덱스에서 1을 뺀 요소부터 시작
  const index = this.heap.length - 1;

  // 상위 노드가 존재하고, 상위 노드의 값이 추가된 노드의 값보다 작을 때까지 반복
  while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
    // 상위 노드와 추가된 노드의 위치를 바꿔줍니다
    this.swap(this.getParentIndex(index), index);
    // 추가된 노드의 인덱스를 상위 노드의 인덱스로 변경
    index = this.getParentIndex(index);
  }
}

function heapifyDown() {
  // 루트 노드의 인덱스에서 시작
  const index = 0;

  // 왼쪽 자식 노드가 있는 한 계속 반복
  while (this.hasLeftChild(index)) {
    // 자식 중 더 작은 노드의 인덱스를 구합니다.
    let smallerChildIndex = this.getLeftChildIndex(index);
    if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
      smallerChildIndex = this.getRightChildIndex(index);
    }

    if (this.heap[index] < this.heap[smallerChildIndex]) {
      break;
    } else {
      this.swap(index, smallerChildIndex);
    }

    index = smallerChildIndex;
  }
}
