---
tags:
  - Data-Structure
  - Tree
---
트리는 Edge(간선)로 연결된 계층적 관계를 표현하는 자료구조입니다. 이는 [[array & linked-list]], [[stack & queue]]와 같은 선형 데이터 구조와 대조되는 비선형 데이터 구조입니다.

### 트리를 구성하는 용어
- Node (노드): 트리를 구성하는 개별 데이터 요소입니다.
- Edge (간선): 트리를 구성하기 위해 노드와 노드를 연결하는 선입니다.
- Root Node (루트 노드): 트리 구조에서 최상단에 있는 노드입니다.
- Parent Node (상위 노드): Root Node를 제외한 모든 노드의 직접적인 선행 노드입니다.
- Leaf Node (단말 노드): 하위에 다른 노드가 연결되어 있지 않은 노드
- Internal Node (내부 노드): 단일 노드를 제외한 모든 노드(노드에 Child가 하나라도 존재)를 의미하며 Root Node를 포함합니다.
- Level (계층): 트리에서는 각 층별로 숫자를 매기는데 이를 레벨이라고 합니다. Root Node(level 0)부터 단계마다 +1씩 증가합니다.
- Height (높이): Root Node에서 Leaf Node까지 가장 긴 경로의 Edge 수를 의미합니다. (트리의 최고 Level)
- Size (크기): Node의 개수입니다.

![[tree.svg]]

### 트리가 될 수 없는 경우
1. Node의 Edge가 자기 자신을 향하는 경우
2. Path에서 사이클이 생기는 경우
3. Node가 2개 이상의 Parent를 가지는 경우
4. 서로 연결되지 않은 SubTree가 존재하는 경우

### 트리의 종류
- Binary Tree (이진 트리): 각 노드가 최대 2개의 자식을 가질 수 있는 트리입니다. 일반적으로 left child와 right child라고 합니다.
- Binary Search Tree (BST): Binary Tree의 일종으로 데이터를 저장하는데 특정 규칙을 갖는 이진 트리입니다.
- Balanced Binary Search Trees (AVL Trees, Red-Black Trees): 트리 작업(탐색, 삽입, 삭제)이 O(log n)의 시간 복잡도를 가지도록 Balance를 유지하는 BST를 기반으로 하는 트리 형식의 자료 구조입니다.
![[unbalanced-tree.svg]]
- Heap (힙):힙 속성(최소 힙, 최대 힙)을 충족하는 특수한 트리 기반 자료 구조입니다.

### 왜 트리를 사용하는가
- 계층적 표현: 트리는 자연스럽게 파일 시스템과 같은 계층적 특징을 지닌 구조를 나타냅니다.
- 효율적인 작업: BST는 Balance가 유지되면 효율적인 탐색, 삽입 및 삭제 작업을 할 수 있습니다.
- 시도: 동적 맞춤법 검사에 사용할 수 있습니다.
- 힙: 힙 정렬과 같은 알고리즘에 사용되며 우선순위 큐를 구현하는 데 사용됩니다.
- 균형이 유지된 트리: 여러 작업에 O(log n)의 시간 복잡도가 소요되므로 데이터베이스 인덱싱에 매우 유용합니다.

### 순회 기술
![[traversing.svg]]
- In-Order (LNR): 왼쪽 가지, 현재 노드, 오른쪽 가지 순서로 노드를 방문하고 출력하는 방법입니다. none-descreasing 순서로 노드를 가져오기 위해 BST에 주로 사용됩니다.
- Pre-Order (NLR): 자식 노드보다 현재 노드를 먼저 방문합니다. 항상 루트 노드를 가장 먼저 방문합니다. 트리의 복사본을 만드는 데 유용합니다.
- Post-Order (LRN): 파일 시스템, 데이터베이스에서 노드를 삭제하거나 해제하는 데 유용합니다.
## 코드
### Binary Search Tree
```js
class TreeNode {
  constructor(value) {
    this.value = value

    this.left = null

    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // 트리에 노드를 삽입하는 메서드

  insert(value) {
    const newNode = new TreeNode(value)

    if (this.root === null) {
      this.root = newNode

      return this
    }

    let currentNode = this.root

    while (true) {
      if (value < currentNode.value) {
        // 왼쪽 서브트리

        if (!currentNode.left) {
          currentNode.left = newNode

          return this
        }

        currentNode = currentNode.left
      } else {
        // 오른쪽 서브트리

        if (!currentNode.right) {
          currentNode.right = newNode

          return this
        }

        currentNode = currentNode.right
      }
    }
  }

  // 트리에서 노드를 찾는 메서드

  search(value) {
    let currentNode = this.root

    while (currentNode) {
      // 노드를 찾으면 해당 노드를 반환

      if (value === currentNode.value) {
        return currentNode

        // 찾는 값이 노드의 값보다 작으면 왼쪽 서브트리에서 탐색
      } else if (value < currentNode.value) {
        currentNode = currentNode.left

        // 찾는 값이 노드의 값보다 크면 오른쪽 서브트리에서 탐색
      } else {
        currentNode = currentNode.right
      }
    }

    // 노드를 찾지 못하면 null 반환

    return null
  }

  // 최소값을 갖는 노드를 찾는 헬퍼 메서드

  findMin(node) {
    let currentNode = node

    while (currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode
  }

  // 트리에서 노드를 삭제하는 메서드

  delete(value, node = this.root) {
    if (!node) return null

    if (value < node.value) {
      node.left = this.delete(value, node.left)
    } else if (value > node.value) {
      node.right = this.delete(value, node.right)
    } else {
      // 삭제할 노드가 자식이 하나만 있거나 자식 노드가 없는 경우

      if (!node.left) return node.right

      if (!node.right) return node.left

      // 삭제할 노드의 자식이 둘인 경우

      // 삭제할 노드의 오른쪽 서브트리에서 최소값을 갖는 노드를 찾아 삭제할 노드의 자리에 삽입

      node.value = this.findMin(node.right).value

      node.right = this.delete(node.value, node.right)
    }

    return node
  }

  // 트리를 중위 순회하는 메서드

  inOrder(node = this.root) {
    let result = []

    if (node) {
      result = result.concat(this.inOrder(node.left))

      result.push(node.value)

      result = result.concat(this.inOrder(node.right))
    }

    return result
  }

  // 트리를 전위 순회하는 메서드

  preOrder(node = this.root) {
    let result = []

    if (node) {
      result.push(node.value)

      result = result.concat(this.preOrder(node.left))

      result = result.concat(this.preOrder(node.right))
    }

    return result
  }

  // 트리를 후위 순회하는 메서드

  postOrder(node = this.root) {
    let result = []

    if (node) {
      result = result.concat(this.postOrder(node.left))

      result = result.concat(this.postOrder(node.right))

      result.push(node.value)
    }

    return result
  }
}

const bst = new BinarySearchTree()

bst.insert(50)
bst.insert(30)
bst.insert(70)
bst.insert(20)
bst.insert(40)
bst.insert(60)
bst.insert(80)

console.log(bst.search(60)) // TreeNode { value: 60, left: null, right: null }
console.log(bst.search(65)) // null
console.log("In-Order:", bst.inOrder()) // [20, 30, 40, 50, 60, 70, 80]
console.log("Pre-Order:", bst.preOrder()) // [50, 30, 20, 40, 70, 60, 80]
console.log("Post-Order:", bst.postOrder()) // [20, 40, 30, 60, 80, 70, 50]

bst.delete(20)
bst.delete(30)
bst.delete(50)

console.log("In-Order:", bst.inOrder()) // [40, 60, 70, 80]
console.log("Pre-Order:", bst.preOrder()) // [60, 40, 70, 80]
console.log("Post-Order:", bst.postOrder()) // [40, 80, 70, 60]
```
### 이진 탐색 트리인지 검사하기
```js
class TreeNode {
  constructor(value) {
    this.value = value

    this.left = null

    this.right = null
  }
}

function isBST(root, min = null, max = null) {
  // 트리가 비어 있다면 true 반환

  if (!root) {
    return true
  }

  // 노드의 값이 최소값보다 작거나 최대값보다 크면 false 반환

  if (min !== null && root.value <= min) {
    return false
  }

  // 노드의 값이 최대값보다 크거나 최소값보다 작으면 false 반환

  if (max !== null && root.value >= max) {
    return false
  }

  // 왼쪽 서브트리와 오른쪽 서브트리를 재귀적으로 탐색

  const leftSide = isBST(root.left, min, root.value)

  const rightSide = isBST(root.right, root.value, max)

  return leftSide && rightSide
}

const root = new TreeNode(50)
root.left = new TreeNode(30)
root.right = new TreeNode(70)
root.left.left = new TreeNode(20)
root.left.right = new TreeNode(40)
root.right.left = new TreeNode(60)
root.right.right = new TreeNode(80)

console.log(isBST(root)) // true

// 트리를 이진 탐색 트리가 아닌 것으로 만들기 위해 노드의 값을 변경

root.right.left.left = new TreeNode(10) // 10은 이제 60의 왼쪽에 있으므로 이진 탐색 트리의 조건을 만족하지 않습니다

console.log(isBST(root)) // false

```