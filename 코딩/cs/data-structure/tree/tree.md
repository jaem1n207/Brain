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