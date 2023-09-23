class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 트리에 노드를 삽입하는 메서드
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        // 왼쪽 서브트리
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        // 오른쪽 서브트리
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // 트리에서 노드를 찾는 메서드
  search(value) {
    let currentNode = this.root;

    while (currentNode) {
      // 노드를 찾으면 해당 노드를 반환
      if (value === currentNode.value) {
        return currentNode;
        // 찾는 값이 노드의 값보다 작으면 왼쪽 서브트리에서 탐색
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
        // 찾는 값이 노드의 값보다 크면 오른쪽 서브트리에서 탐색
      } else {
        currentNode = currentNode.right;
      }
    }

    // 노드를 찾지 못하면 null 반환
    return null;
  }

  // 최소값을 갖는 노드를 찾는 헬퍼 메서드
  findMin(node) {
    let currentNode = node;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  // 트리에서 노드를 삭제하는 메서드
  delete(value, node = this.root) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      // 삭제할 노드가 자식이 하나만 있거나 자식 노드가 없는 경우
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // 삭제할 노드의 자식이 둘인 경우
      // 삭제할 노드의 오른쪽 서브트리에서 최소값을 갖는 노드를 찾아 삭제할 노드의 자리에 삽입
      node.value = this.findMin(node.right).value;
      node.right = this.delete(node.value, node.right);
    }

    return node;
  }

  // 트리를 중위 순회하는 메서드
  inOrder(node = this.root) {
    let result = [];
    if (node) {
      result = result.concat(this.inOrder(node.left));
      result.push(node.value);
      result = result.concat(this.inOrder(node.right));
    }

    return result;
  }

  // 트리를 전위 순회하는 메서드
  preOrder(node = this.root) {
    let result = [];
    if (node) {
      result.push(node.value);
      result = result.concat(this.preOrder(node.left));
      result = result.concat(this.preOrder(node.right));
    }

    return result;
  }

  // 트리를 후위 순회하는 메서드
  postOrder(node = this.root) {
    let result = [];
    if (node) {
      result = result.concat(this.postOrder(node.left));
      result = result.concat(this.postOrder(node.right));
      result.push(node.value);
    }

    return result;
  }
}

const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(bst.search(60)); // TreeNode { value: 60, left: null, right: null }
console.log(bst.search(65)); // null

console.log('In-Order:', bst.inOrder()); // [20, 30, 40, 50, 60, 70, 80]
console.log('Pre-Order:', bst.preOrder()); // [50, 30, 20, 40, 70, 60, 80]
console.log('Post-Order:', bst.postOrder()); // [20, 40, 30, 60, 80, 70, 50]

bst.delete(20);
bst.delete(30);
bst.delete(50);

console.log('In-Order:', bst.inOrder()); // [40, 60, 70, 80]
console.log('Pre-Order:', bst.preOrder()); // [60, 40, 70, 80]
console.log('Post-Order:', bst.postOrder()); // [40, 80, 70, 60]
