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

![[Excalidraw/tree]]

### 트리가 될 수 없는 경우
1. Node의 Edge가 자기 자신을 향하는 경우
2. Path에서 사이클이 생기는 경우
3. Node가 2개 이상의 Parent를 가지는 경우
4. 서로 연결되지 않은 SubTree가 존재하는 경우

### 트리의 종류
- Binary Tree (이진 트리): 각 노드가 최대 2개의 자식을 가질 수 있는 트리입니다. 일반적으로 left child와 right child라고 합니다.
- Binary Search Tree (BST): Binary Tree의 일종으로 데이터를 저장하는데 특정 규칙을 갖는 이진 트리입니다.
- Balanced Binary Search Trees (AVL Trees, Red-Black Trees): 트리 작업(탐색, 삽입, 삭제)이 O(log n)의 시간 복잡도를 가지도록 Balance를 유지하는 BST를 기반으로 하는 트리 형식의 자료 구조입니다.
- Heap (힙):힙 속성(최소 힙, 최대 힙)을 충족하는 특수한 트리 기반 자료 구조입니다.

### 왜 트리를 사용하는가
- 계층적 표현: 트리는 자연스럽게 파일 시스템과 같은 계층적 특징을 지닌 구조를 나타냅니다.
- 효율적인 작업: BST는 Balance가 유지되면 효율적인 탐색, 삽입 및 삭제 작업을 할 수 있습니다.
- 시도: 동적 맞춤법 검사에 사용할 수 있습니다.
- 힙: 힙 정렬과 같은 알고리즘에 사용되며 우선순위 큐를 구현하는 데 사용됩니다.
- 균형이 유지된 트리: 여러 작업에 O(log n)의 시간 복잡도가 소요되므로 데이터베이스 인덱싱에 매우 유용합니다.

### 순회 기술
- In-Order (LNR): 왼쪽 가지, 현재 노드, 오른쪽 가지 순서로 
- Pre-Order (NLR):
- Post-Order (LRN)
