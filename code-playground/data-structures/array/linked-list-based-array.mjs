import { hasCycle } from './has-cycle.mjs';

class LinkedList {
  constructor() {
    this.list = [];
  }

  // 리스트의 끝에 새 노드를 추가합니다
  append(value) {
    let newNode = { value, next: null };

    if (this.list.length === 0) {
      this.list.push(newNode);
    } else {
      let lastNode = this.list[this.list.length - 1];
      lastNode.next = this.list.length; // 새 노드의 인덱스를 next에 저장합니다
      this.list.push(newNode);
    }
  }

  delete(value) {
    if (this.list.length === 0) return;

    // head 노드가 삭제되는 경우
    if (this.list[0].value === value) {
      this.list.shift();
      // 모든 노드의 next 속성을 업데이트합니다
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].next !== null) {
          this.list[i].next--;
        }
      }
      return;
    }

    let previous = null;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].value === value) {
        if (previous !== null) {
          this.list[previous].next = this.list[i].next;
        }
        this.list.splice(i, 1);
        // 삭제된 노드의 이후의 모든 노드의 next 속성을 업데이트합니다
        for (let j = i; j < this.list.length; j++) {
          if (this.list[j].next !== null) {
            this.list[j].next--;
          }
        }
        return;
      }
      previous = i;
    }
  }

  // 리스트의 모든 노드를 출력합니다
  print() {
    let currentNodeIndex = 0;
    while (currentNodeIndex !== null && this.list[currentNodeIndex]) {
      console.log(this.list[currentNodeIndex].value);
      currentNodeIndex = this.list[currentNodeIndex].next;
    }
  }
}

let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.delete(2);
linkedList.print(); // Outputs: 1, 3
