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
- Balanced Binary Search Trees (AVL Tree, Red-Black Tree): 트리 작업(탐색, 삽입, 삭제)이 O(log n)의 시간 복잡도를 가지도록 Balance를 유지하는 BST를 기반으로 하는 트리 형식의 자료 구조입니다.
- Heap (힙):힙 속성(최소 힙, 최대 힙)을 충족하는 특수한 트리 기반 자료 구조입니다.

### 왜 트리를 사용하는가
- 계층적 표현: 트리는 자연스럽게 파일 시스템과 같은 계층적 특징을 지닌 구조를 나타냅니다.
- 효율적인 작업: BST는 Balance가 유지되면 효율적인 탐색, 삽입 및 삭제 작업을 할 수 있습니다.
- 트라이 (접두사 트리): 동적 맞춤법 검사에 사용할 수 있습니다.
- 힙: 힙 정렬과 같은 알고리즘에 사용되며 우선순위 큐를 구현하는 데 사용됩니다.
- 균형이 유지된 트리: 여러 작업에 O(log n)의 시간 복잡도가 소요되므로 데이터베이스 인덱싱에 매우 유용합니다.

### 순회 기술
![[traversing.svg]]

- In-Order (LNR): 왼쪽 가지, 현재 노드, 오른쪽 가지 순서로 노드를 방문하고 출력하는 방법입니다. none-descreasing 순서로 노드를 가져오기 위해 BST에 주로 사용됩니다.
- Pre-Order (NLR): 자식 노드보다 현재 노드를 먼저 방문합니다. 항상 루트 노드를 가장 먼저 방문합니다. 트리의 복사본을 만드는 데 유용합니다.
- Post-Order (LRN): 파일 시스템, 데이터베이스에서 노드를 삭제하거나 해제하는 데 유용합니다.

## Binary Tree (이진 트리)
- 정의: 모든 노드가 최대 2개의 자식을 갖는 트리입니다.
- 특징: 왼쪽 또는 오른쪽 노드로 분류됩니다.
- 시간 복잡도:
	- 편향 트리가 아닌 사례: O(log n)
	- 최악의 경우: O(n) -> 트리가 LinkedList로 변질되는 경우에 탐색, 삽입, 삭제 작업의 경우

## Perfect Binary Tree (포화 이진 트리)
- 정의: 모든 내부 노드가 정확히 2개의 자식을 갖고 모든 Leaf Node가 동일한 수준에 있는 이진 트리입니다. 마지막 단계에서 노드의 개수가 최대가 됩니다.
- 특징: 2ℎ-1개의 노드를 갖습니다.(여기서 h는 트리의 높이)
- 시간 복잡도: 이진 트리와 동일하지만 "완벽한" 구조를 유지해야 하기 때문에 마지막 수준에 삽입하는 데 더 많은 비용이 들 수 있습니다.

## Complete Binary Tree (완전 이진 트리)
- 정의: 마지막 레벨을 제외한 모든 레벨이 완전히 채워지고 모든 노드가 가능한 한 남아 있는 이진 트리입니다. 마지막 단계는 꽉 채워져 있지 않아도 되지만 노드가 왼쪽에서 오른쪽으로 채워져야 합니다.
- 특징: 배열을 이용하여 쉽게 구현할 수 있습니다. 위치 i에 있는 노드의 왼쪽 자식은 2i+1 위치에 있고 오른쪽 자식은 2i+2 위치에 있습니다.
- 시간 복잡도: 배열을 사용하고 트리의 크기를 알고 있는 경우 삽입은 O(1)로 수행될 수 있습니다.

## Full Binary Tree (정 이진 트리)
- 정의: 모든 노드가 0개 또는 2개의 자식 노드만을 갖는 이진 트리입니다.
- 특징: 정확히 하나의 하위 항목을 갖는 노드가 없습니다.
- 시간 복잡도: 일반 이진 트리와 동일합니다.

## Binary Search Tree (이진 탐색 트리)
효율적인 탐색을 위해서는 어떻게 찾을까만 고민해서는 안됩니다. 그보다는 효율적인 탐색을 위한 저장 방법이 무엇일지 고민하는 게 중요합니다. 이진 탐색 트리는 이진 트리의 일종이며, 데이터를 저장하는 4가지 규칙이 있습니다. 이 규칙은 특정 데이터의 위치를 찾는데 사용할 수 있습니다. 규칙은 아래와 같습니다.

- 규칙 1. 이진 탐색 트리의 노드에 저장된 키는 유일합니다.
- 규칙 2. 부모의 키가 왼쪽 하위 노드의 키보다 큽니다.
- 규칙 3: 부모의 키가 오른쪽 하위 노드의 키보다 작습니다.
- 규칙 4: 왼쪽과 오른쪽 서브 트리도 이진 탐색 트리입니다.

![[unbalanced-tree.svg]]

한 쪽으로만 노드가 추가되는 편향 트리가 되지 않도록 주의해야 합니다. 편향 트리가 된다면 시간 복잡도는 O(n)이 됩니다. 

배열보다 많은 메모리를 사용하며 데이터를 저장했지만 탐색에 필요간 시간 복잡도가 같게 되는 비효율적인 상황이 발생합니다. 이를 해결하기 위해 `Rebalancing`기법이 등장했습니다. 균형을 잡기 위한 트리 구조의 재조정을 `Rebalancing`이라고 합니다. 이 기법을 구현한 트리는 Red-Black Tree와 AVL Tree가 있습니다.

- 특징: 빠른 데이터 탐색, 삽입, 삭제가 가능합니다.
- 시간 복잡도:
	- 편향 트리가 아닌 사례: O(log n)
	- 최악의 경우: 트리가 LinkedList로 변질되는 경우 O(n)

## Binary Heap (바이너리 힙)
자료구조의 일종으로 Tree의 형식을 취하고 있으며, Tree 중에서도 배열에 기반한 완전 이진 트리(트리의 마지막 단계에서 오른쪽 부부늘 뺀 나머지 부분이 가득 채워져 있기 때문)입니다. 배열에 트리의 값들을 넣어줄 때, 0번째는 건너뛰고 1번 index로부터 Root 노드가 시작됩니다. 이는 노드의 고유번호 값과 배열의 index를 일치시켜 혼동을 줄이기 위함입니다. 힙은 `최대힙`, `최소힙`의 두 가지 형태 중 하나로 제공됩니다.

`최대힙`이란, 상위 노드는 하위 노드보다 크거나 같은 값을 가지는 것을 의미합니다.
`최소힙`이란, 상위 노드는 하위 노드보다 더 작은 값을 가지는 것을 의미합니다. (루트 노드가 가장 작음)

`최대힙`에서는 Root 노드에 있는 값이 제일 크므로, 최대값을 찾는데 소요되는 연산은 O(1)의 시간 복잡도를 갖습니다. 그리고 완전 이진 트리기 때문에 배열을 사용하여 효율적으로 관리할 수 있습니다. 하지만 힙의 구조를 계속 유지하기 위해서는 제거된 Root 노드를 대체할 다른 노드가 필요합니다. 이런 경우에는 결국 O(log n)의 시간 복잡도로 최대값 또는 최소값에 접근할 수 있게 됩니다.
- 시간 복잡도:
	- 최대/최소 탐색: O(1)
	- 삽입: O(log n)
	- 삭제: O(log n)

그럼 위에서 설명한 데이터 구조를 어떻게 생성하고 유지하는 **최소힙을 구현**할 수 있을까요? 삽입을 예로 들어 보겠습니다. 요소를 삽입하면 항상 위에서 아래로 왼쪽에서 오른쪽으로 보면서 다음 빈 자리로 이동합니다. 아래 사진을 보겠습니다.

![[min-heap]]

요소를 삽입하면 빈 동그라미처럼 왼쪽에서 오른쪽으로 채워집니다. 이게 삽입이 동작하는 방식인데요. 하지만 실제로 요소가 있어야 하는 자리가 아니라면 어떻게 할까요? 아래 사진에선 3을 추가했다고 예를 들어보겠습니다.

![[min-heap-insert-before]]

추가된 3은 저 자리에 있으면 안 됩니다. 따라서 삽입된 노드를 가져와 상위 노드와 교체해나가며 올바른 위치에 도달할 때까지버블링하는 것입니다. 아래 사진이 위 사진에서 어떻게 변했는지 확인해보세요. 버블링을 하며 올바른 위치로 교체된 것을 확인할 수 있습니다.

![[min-heap-bubble-process]]

그럼 이제 **최소 요소를 제거**하는 것은 어떻게 할 수 있을까요?

## Red-Black Tree (레드-블랙 트리)
BST를 기반으로 하는 트리 형식의 자료구조입니다. 동일한 노드의 개수일 때, `depth`를 최소화(깊이 보장)하여 시간 복잡도를 줄이는 것이 핵심 아이디어입니다. 동일한 노드의 개수일 때, `depth`가 최소가 되는 경우는 트리가 완전 이진 트리인 경우입니다.

- 정의: 각 노드에 색상(빨간색 또는 검은색)이 있고 트리가 특정 balance 속성을 만족하여 최악의 경우 깊이를 보장하는 `balanced binary search tree`입니다.
- 특징:
	- 각 노드는 `Red` or `Black`이라는 색상을 갖습니다.
	- Root 노드는 항상 검은색입니다.
	- 각 leaf 노드는 검은색입니다.
	- 레드 노드는 하위 레드 노드를 가질 수 없습니다. (2개의 연속된 레드 노드는 불가능, 모두 black을 가짐)
	- 루트에서 널 포인터까지의 모든 경로에는 동일한 수의 블랙 노드가 있어야 합니다. 이를 해당 노드의 `Black-Height`라고 합니다.
	- Binary Search Tree 이므로 BST의 특징을 모두 갖습니다.
	- Root 노드부터 Leaf 노드 까지의 모든 경로 중 최소 경로의 크기 비율은 **2 보다 크지 않습니다.** 이러한 상태를 `balanced` 상태라고 합니다.
	- 노드의 자식이 없는 경우 자식을 가리키는 포인터는 NIL 값을 저장합니다. 이러한 NIL들을 Leaf 노드로 간주합니다.
- 시간 복잡도: 
	- 탐색: O(log n)
	- 삽입: O(log n)
	- 제거: O(log n)

RBT는 BST의 삽입, 삭제 연산 과정에서 발생할 수 있는 문제점을 해결하기 위해 만들어진 자료구조입니다. 그럼 이를 어떻게 해결한 것일까요?
### 삽입
우선 BST의 특성을 유지하면서 노드를 삽입합니다. 그리고 삽입된 노드의 색상은 빨간색입니다. `Red`로 지정하는 이유는` Black-Height` 변경을 최소화하기 위함입니다. 삽입 결과 RBT의 특성 위배 시 노드의 색상을 조정하고, `Black-Height가` 위배되었다면 `rotation`을 통해 `height`를 조정합니다. 이러한 과정을 통해 RBT의 동일한 `height`에 존재하는 `internal node (내부 노드)`들의 `Black-Height`가 같아지게 되고 최소 경로와 최대 경로의 크기 비율이 2 미만으로 유지될 수 있습니다.
### 삭제
삭제도 삽입과 마찬가지로 BST의 특성을 유지하면서 노드를 삭제합ㄴ디ㅏ. 삭제될 노드의 자식의 개수에 따라 `rotation` 방법이 달라지게 됩니다. 그리고 만약 지워진 노드의 색깔이 `Black`이라면 `Black-Height`가 1 감소한 경로에 `black node`가 1개 추가되도록 `rotation`하고 노드의 색상을 조정합니다. 지워진 노드의 색상이 `red`라면 `Violation`이 발생하지 않으므로 RBT가 그대로 유지됩니다.

Java Collection 에서 TreeMap도 내부적으로 RBT 로 이루어져 있고, HashMap 에서의 `Separate Chaining`에서도 사용됩니다. 그만큼 효율이 좋고 중요한 자료구조입니다.

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
### 주어진 트리가 이진 탐색 트리인지 검사하기
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

## 참고
- [Hackerrank Youtube Channel](https://www.youtube.com/@HackerrankOfficial)
- [jbee/interview_question_for_beginner](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/master/DataStructure/README.md#tree)
