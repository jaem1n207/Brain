---
tags:
  - Data-Structure
---
해시 테이블은 해시 함수와 함께 배열을 사용하며 키-값 쌍을 저장할 수 있습니다. 키가 주어지면 **매우 빠른 조회**를 위해 값을 키와 연결하는 방법을 제공합니다. 키를 가져와서 해시 함수를 통해 처리한 다음 빠르게 저장 위치를 결정하거나 이와 관련된 값을 탐색할 수 있습니다.

```block
key  => value lookup
"ai" => new Person(iq=179, name='ben')
"barb" => new Person(q=140, name='hacky')
```

특정한 값을 탐색하는데 데이터 고유의 인덱스로 접근하게 되므로 평균적으로 시간 복잡도는 `O(1)`이 됩니다. 여기서 **평균적으로** O(1)인 것은 `Collision` 때문입니다. `Collision`이 자주 발생한다면 탐색 시간은 O(n)에 가까워지게 됩니다. 인덱스 값을 생성하는 해시 함수를 잘 구현하지 못하면 속도 이점은 메모리를 희생하면서 발생하는 것인만큼 메모리는 더 많이 사용하는데 시간 복잡도는 같게 되는 비효율적인 상황이 발생하게 됩니다.

고유한 인덱스 값은 **해시 함수**를 통해 생성됩니다. 그러므로 충돌을 최소화하려면 결국 좋은 해시 함수를 만드는 게 중요해 보입니다. 그렇다면 좋은 해시 함수는 어떠한 조건을 갖추어야 할까요?

일반적으로 좋은 해시 함수는 키의 일부분을 참조하여 해시 값을 생성하지 않고 키가 어떤 특성을 가지고 있느냐에 따라 달라지게 됩니다.

해시 함수를 무조건 1:1로 만드는 것보다 `Collision`을 최소화하는 방향으로 설계하고 발생하는 충돌에 대비해 어떻게 대응할 것인가가 더 중요합니다. 1:1 대응이 되도록 해시 함수를 만들어봤자 그건 `array`와 다를바 없고 메모리를 너무 차지하게 됩니다.

`Collision`은 왜 발생하게 되는 걸까요? 탐색할 때 데이터 고유의 인덱스로 접근합니다. 이 고유의 인덱스는 해시 함수를 이용해 저장할 데이터와 연관된 고유한 숫자를 만들어 낸 뒤 이를 인덱스로 사용하는 것입니다. 또한 이 고유한 인덱스는 메모리 효율을 위해 **작은 범위의 값**을 가집니다. 작은 범위의 값으로 상당히 큰 배열에 대해 해시 코드를 1:1 대응이 되도록 만들기엔 한계가 있으므로 충돌이 납니다. 그러므로 `Collision` 해결은 필수이며 그 방법들에 대해 알아보겠습니다.

해시 충돌이 발생하더라도 키-값 쌍 데이터를 잘 저장하고 조회할 수 있게 하는 방식에는 대표적으로 `Open Address`과 `Separate Chaining` 2가지 방식이 있습니다. 이 둘 외에도 해시 충돌을 해결하기 위한 다양한 자료 구조가 있지만, 거의 모두 이 둘을 응용한 것이라고 할 수 있습니다.

## Separate Chaining 방식 (분리 연결법)
충돌이 발생하면 `Linked List`를 사용해 저장하는 방식입니다.


## Open Address 방식 (개방주소법)
해시 충돌이 발생하면 **다른 해시 버킷에 해당 자료를 삽입하는 방식**입니다. 버킷이란 바구니와 같은 개념으로 데이터를 저장하기 위한 공간이라고 생각하면 됩니다. 그럼 다른 해시 버킷이란 어떤 해시 버킷을 말하는 것일까요?

이 알고리즘은 충돌이 발생하면 데이터를 저장할 장소를 찾아 헤맵니다. 최악의 경우 비어있는 버킷을 찾지 못하고 탐색을 시작한 위치까지 되돌아 올 수 있습니다. 이 과정에서도 여러 방법들이 존재하는데, 다음 세 가지를 살펴보겠습니다.
1. Linear Probing: 버킷이 비어 있으면 다음 버킷으로(선형적으로) 이동하며 비어 있는지 확인합니다. 비어 있는 버킷을 찾을 때까지 또는 전체 테이블을 확인할 때까지 반복합니다.
2. Quadratic Probing: 버킷이 사용 중이면 버킷을 건너뛰고 건너뛰는 크기는 제곱으로 증가합니다.
3. Double hashing Probing: 하나의 해시 함수에서 충돌이 발생하면 2번째 해시 함수를 사용해 건너뛸 버킷 수를 결정합니다.

### 개방주소법 참고 사항
1. Load Factor: 해시 테이블이 가득 차면 충돌 횟수가 증가하고 성능이 저하됩니다. 따라서 개방형 주소 지정의 효율성은 로드율(테이블 크기에 대한 요소 수의 비율로 정의됨)에 따라 크게 달라집니다. 경험적으로 로드 팩터가 0.7을 초과하면(즉, 70% 가득 차면) 해시 테이블의 크기를 조정하는 것이 유용한 경우가 많습니다.
2. Deletions: open address 방식에서 삭제는 까다로울 수 있습니다. 요소를 제거하는 것만으로도 다른 키에 대한 검색 작업이 중단될 수 있기 때문입니다. 일반적인 전략은 특수 플래그를 사용하여 삭제된 위치를 표시하여 버킷을 삽입하는 동안 재사용할 수 있지만 프로빙하는 동안 "비어 있는" 것으로 처리되지 않도록 하는 것입니다.
3. Clustering: 선형 프로빙을 사용하면 연속 버킷의 큰 블록이 채워져 성능이 저하되는 '기본 클러스터링'이라는 현상이 발생할 수 있습니다. 2차 프로빙과 이중 해싱은 이를 완화할 수 있지만 자체적인 문제가 발생합니다.
4. Table Sizing: 개방형 주소 지정, 특히 이중 해싱의 경우 더 나은 값 분포를 보장하기 위해 소수를 테이블 크기로 사용하는 것이 좋은 경우가 많습니다.

본질적으로 개방주소법은 로드 비율이 낮게 유지될 때 효율적일 수 있으며 테이블의 각 버킷이 단일 항목을 보유하므로 메모리를 절약할 수 있습니다(각 버킷이 항목 목록을 보유할 수 있는 별도의 체인과 반대). 그러나 삭제를 신중하게 처리해야 하며 제대로 관리하지 않으면 성능이 저하될 수 있습니다.

### 참고
- [jbee/interview_question_for_beginner](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/DataStructure/README.md#1-open-address-%EB%B0%A9%EC%8B%9D-%EA%B0%9C%EB%B0%A9%EC%A3%BC%EC%86%8C%EB%B2%95)
- [Java HashMap은 어떻게 동작하는가](https://d2.naver.com/helloworld/831311)