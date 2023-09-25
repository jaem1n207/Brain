---
tags:
  - Data-Structure
---
## Array
구현할 자료들을 논리적인 순서대로 메모리에 **연속**하여 저장하는 자료구조입니다. 즉, 자료의 논리적 저장 순서와 물리적 저장 순서가 일치합니다. 따라서 인덱스로 해당 원소에 접근할 수 있습니다.
### 탐색
찾고자 하는 원소의 인덱스 값을 알고 있으면 Big-O(1)에 해당 원소로 접근할 수 있습니다.
### 삽입 및 삭제
맨 끝을 제외하고 데이터를 삽입하거나 삭제하고 나면, 연속적인 물리적 위치를 유지하기 위해 **원소를 옮기는 추가 작업**을 해야 하므로 시간이 더 걸립니다. 이 경우의 시간 복잡도는 O(n)이 됩니다.

## Static Array
- Array의 크기는 처음 생성될 때 정해집니다. (요소 수 제한)
- Static Array는 생성될 때 고정 된 크기를 가지므로 일반적으로 요소를 삽입하거나 삭제할 수 없습니다.

## Dynamic Array
- 일반적으로 필요한 size보다 큰 Static Array를 만들어 쓰는 방식으로 동적 배열을 구성할 수 있습니다. 단순히 동적 배열의 크기를 필요한 크기보다 크게 만든다고 동적 배열이 되는 것은 아닙니다.
- size는 요소가 적재되어 있는 논리적 크기인 `size`와 최대 이용 가능한 물리적 size인 `capacity`로 나누어 볼 수 있습니다.
- 동적 배열에서 더 큰 `capacity`의 Array의 필요성이 생기면 더 큰 `capacity`의 Static Array를 새로 만들어 기존에 있던 배열을 통째로 복사해 옮기는 방식으로 `capacity`를 늘립니다. (e.g. Java ArrayList)
### 삽입
- 배열은 연속된 메모리 공간에 저장되어 있다는 특성을 가지고 있으므로 삽입 및 삭제 시에 `Shift`가 일어납니다.
- 중간, 혹은 맨 처음에 요소 추가 시 삽입 될 위치와 뒤에 있는 요소들이 메모리 주소상 뒤로 1칸씩 밀려야하므로 O(n)의 시간 복잡도가 필요합니다.
- 삽입 연산은 어떤 경우든 O(n)이 걸립니다.
### 삭제
- 삭제도 비슷하게 삭제된 요소 뒤에 있는 요소들이 메모리 주소상 앞으로 1칸씩 당겨져야 하므로 O(n)의 시간 복잡도가 필요합니다.
- 배열의 **맨 뒤**에 요소를 삭제하는 경우 Shift될 요소들이 존재하지 않으므로 O(1)의 시간 복잡도가 필요합니다.
- **맨 앞**의 데이터를 지울 때는 인덱스 1부터 끝까지 모든 요소들을 한 칸씩 앞으로 밀어서 저장해야 하므로 O(n)이 걸립니다.
즉 최악의 경우 O(n), 최상의 경우 O(1)이 소요됩니다.
### 동적 배열 크기 줄이기
- 크기를 줄이는 이유: 낭비되는 메모리를 아끼기 위함입니다.
- 크기를 줄이는 시점: 내부 배열의 사용 비율이 특정 값 이하로 떨어질 때 줄입니다. 이 비율은 개발자나 프로그래밍 언어에 따라 다릅니다.
- 최악의 경우: **더 작은 배열로** 모든 요소들을 옮겨 저장해야 할 때입니다. 배열 안에 있는 요소 수가 n개라고 가정하면, 총n개의 데이터를 모두 새 배열에 복사해서 넣어야 합니다. 맨 뒤 데이터를 삭제하는 건 O(1)이 걸립니다. 하지만 n개의 데이터를 모두 새 배열에 복사해서 넣어야 하므로 O(n)이 걸립니다.
- 맨 끝 데이터 삭제 분할 상환: 하지만 내부 배열의 크기가 줄어드는 건(O(n)) 드문 경우입니다. 대부분의 경우 그냥 마지막 인덱스에 있는 데이터를 지워 주기만 하면 됩니다. 분할 상환 분석을 하면 맨 끝 데이터를 삭제하는 연산은 O(1)입니다.

## Linked List
메모리에 저장된 물리적 위치나 순서에 상관없이, **링크**에 의해 논리적인 순서를 표현하는 자료구조입니다. 즉, 논리적 저장 순서와 물리적 저장 순서가 일치하지 않습니다. 각각의 원소들은 자기 자신 **다음**에 어떤 원소인지만을 기억하고 있습니다.
### 탐색
Array와는 달리 논리적 저장 순서와 물리적 저장 순서가 일치하지 않으므로 첫 번째 원소(헤드)부터 하나씩 인덱스를 증가시키며 다 확인해봐야 합니다. 이 경우의 시간 복잡도는 O(n)이 됩니다.
### 삽입 및 삭제
각각의 원소들은 자기 자신 다음에 어떤 원소인지만을 기억하고 있습니다. 따라서 이 부분만 다른 값으로 바꿔주면 삭제와 삽입을 O(1)만에 해결할 수 있습니다.
하지만 원하는 위치에 삽입을 하고자 한다면 위치를 탐색하는 과정에 있어서 첫 번째 원소부터 다 확인해봐야 합니다. 따라서 그 원소를 찾기 위해서 O(n)의 시간이 추가적으로 발생하게 됩니다.

### 코드
아래는 LinkedList를 ArrayList를 활용해 간단히 구현한 코드 예시입니다. ArrayList를 사용해서 LinkedList를 구현하려면 노드 값과 해당 `links` 또는 다음 노드에 대한 포인터를 추적해야 하는 게 핵심입니다.
```js
class ArrayList {
  constructor() {
    this.data = []
  }

  add(item) {
    this.data.push(item)
  }

  get(index) {
    return this.data[index]
  }

  size() {
    return this.data.length
  }

  removeAt(index) {
    return this.data.splice(index, 1)
  }
}

class LinkedList {
  constructor() {
    this.list = new ArrayList()
  }

  append(value) {
    const newNode = { value, next: null }

    const size = this.list.size()

    if (size === 0) {
      this.list.add(newNode)
    } else {
      const lastNode = this.list.get(size - 1)

      lastNode.next = size

      this.list.add(newNode)
    }
  }

  delete(value) {
    const size = this.list.size()

    for (let i = 0; i < size; i++) {
      const node = this.list.get(i)

      if (node.value === value) {
        this.list.removeAt(i)

        for (let j = i; j < this.list.size(); j++) {
          const nextNode = this.list.get(j)

          if (nextNode.next !== null) nextNode.next--
        }

        return
      }
    }
  }

  print() {
    let currentNodeIndex = 0

    while (currentNodeIndex !== null && currentNodeIndex < this.list.size()) {
      const node = this.list.get(currentNodeIndex)

      console.log(node.value)

      currentNodeIndex = node.next
    }
  }
}

const linkedList = new LinkedList()

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.delete(2)
linkedList.print() // Outputs: 1, 3, 4
```

추가로 만약 LinkedList에 루프가 있다는 것을 확인하고 싶다면 아래처럼 구현해볼 수 있겠습니다. (실제로 동작하지 않는 코드입니다.)
```js
export function hasCycle(linkedList) {
  let slowPointer = linkedList.list.get(0)
  let fastPointer = linkedList.list.get(1)

  while (fastPointer?.next != null && slowPointer != null) {
    if (fastPointer === slowPointer) return true
    slowPointer = linkedList.list.get(slowPointer.next)
    fastPointer = linkedList.list.get(fastPointer.next?.next)
  }

  return false
}
```

## Doubly Linked List
다음 요소에 대한 링크를 갖는 것 외에 추가로 이전 요소에 대한 포인터를 저장함으로써 이전 요소에 접근이 가능하게 만든 Linked List입니다.

## Array와 Linked List 비교
**Array**가 **추가** 및 **삭제** 부분에서 더 효율적이라면, **탐색**은 **Linked List**가 더 효율적입니다.

Array는 인덱스를 통해 원소를 탐색할 수 있지만, Linked List는 각각의 원소들이 자기 자신 다음에 어떤 원소인지만을 기억하고 있다는 특성 때문에 리스트의 처음부터 탐색해야 하기 때문입니다.

## 참고
- [동적 배열, 정적 배열 및 분할 상환 분석](https://codingstudyroom.tistory.com/entry/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EB%8F%99%EC%A0%81-%EC%A0%95%EC%A0%81-%EB%B0%B0%EC%97%B4%EA%B3%BC-%EC%8B%9C%EA%B0%84-%EB%B3%B5%EC%9E%A1%EB%8F%84-%EB%B6%84%ED%95%A0-%EC%83%81%ED%99%98-%EB%B6%84%EC%84%9D)
- [정적 및 동적 배열 개념](https://github.com/qkraudghgh/coding-interview/blob/master/DataStructure/Array/Array.md#static-array)