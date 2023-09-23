class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isBST(root, min = null, max = null) {
  // 트리가 비어 있다면 true 반환
  if (!root) {
    return true;
  }

  // 노드의 값이 최소값보다 작거나 최대값보다 크면 false 반환
  if (min !== null && root.value <= min) {
    return false;
  }

  // 노드의 값이 최대값보다 크거나 최소값보다 작으면 false 반환
  if (max !== null && root.value >= max) {
    return false;
  }

  // 왼쪽 서브트리와 오른쪽 서브트리를 재귀적으로 탐색
  const leftSide = isBST(root.left, min, root.value);
  const rightSide = isBST(root.right, root.value, max);

  return leftSide && rightSide;
}

const root = new TreeNode(50);
root.left = new TreeNode(30);
root.right = new TreeNode(70);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(40);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

console.log(isBST(root)); // true

// 트리를 이진 탐색 트리가 아닌 것으로 만들기 위해 노드의 값을 변경
root.right.left.left = new TreeNode(10); // 10은 이제 60의 왼쪽에 있으므로 이진 탐색 트리의 조건을 만족하지 않습니다
console.log(isBST(root)); // false
