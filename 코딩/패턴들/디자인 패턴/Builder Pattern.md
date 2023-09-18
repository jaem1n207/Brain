빌더 패턴은 객체를 만드는 방법이 여러 가지일 때. 즉 옵션이 많은 객체를 만들어야 할 때 사용됩니다.

예를 들어, `House`클래스를 만든다고 가정해보겠습니다. 집은 방, 화장실, 주방, 발코니 등 매우 다양한 구조를 가질 수 있습니다. 즉, 클래스 생성자는 다음과 같을 것입니다.
```ts
class House {
  constructor(
    public rooms: number,

    public bathrooms: number,

    public kitchens: number,

    public windows: number,

    public hasBalcony: boolean,

    public hasBackyard: boolean
  ) {
    // ...
  }
}
```

생성자에 모든 옵션을 넣어야 하므로 프로퍼티가 많아져 이해하기 어렵습니다. 클래스를 인스턴스화하면 아래와 같이 표시되며, 이는 좋지 않죠.
```ts
new House(2, 1, 1, 8, true, false);
```

이처럼 전달할 게 매우 많은 함수를 사용하는 대신 빌더 패턴을 따르는 경우, 각 구성 옵션을 설정하는 빌더 클래스와 메서드를 생성합니다.
```ts
// 기본 속성만 있는 House 클래스를 구현합니다.
class House {
  public rooms = 0

  public bathrooms = 0

  public kitchens = 0

  public windows = 0

  public hasBalcony = false

  public hasBackyard = false
}

class HouseBuilder {
  private house: House

  // House가 생성되는 순간 인스턴스화할 HouseBuilder 클래스를 생성합니다.
  constructor() {
    this.house = new House()
  }

  // 집의 각 속성을 설정하는 메서드를 정의합니다.
  setRooms(rooms: number) {
    this.house.rooms = rooms
    
    // 'Builder' 그 자체인 'this'를 반환합니다.
    return this
  }

  setBathrooms(bathrooms: number) {
    this.house.bathrooms = bathrooms

    return this
  }

  setKitchens(kitchens: number) {
    this.house.kitchens = kitchens

    return this
  }

  setWindows(windows: number) {
    this.house.windows = windows

    return this
  }

  setHasBalcony(hasBalcony: boolean) {
    this.house.hasBalcony = hasBalcony

    return this
  }

  setHasBackyard(hasBackyard: boolean) {
    this.house.hasBackyard = hasBackyard

    return this
  }

  // 마지막으로 create house를 반환하는 'build' 메서드를 정의합니다. 
  public build(): House {
    return this.house
  }
}
```

위처럼 구현해두면 다음에 `House`를 생성할 때 `HouseBuilder`를 인스턴스화하고 아래와 같이 `House`에 원하는 속성을 설정하는 메서드를 호출하기만 하면 됩니다.
```ts
const houseOne = new HouseBuilder()
  .setRooms(4)
  .setBathrooms(3)
  .setKitchens(2)
  .setWindows(6)
  .setHasBalcony(true)
  .setHasBackyard(true)
  .build()

const houseTwo = new HouseBuilder()
  .setRooms(2)
  .setBathrooms(1)
  .setKitchens(1)
  .setWindows(4)
  .setHasBalcony(false)
  .setHasBackyard(false)
  .build()
```

이렇게 하면 빌더를 통해 집의 속성을 설정하고 완료되면 `build` 메서드를 호출해서 생성한 집을 가져올 수 있습니다.

이제 필요한 메서드를 호출하는 것만으로 모든 종류의 특성을 가진 집을 생성할 수 있게 되었습니다. 이렇듯 빌더 패턴은 코드를 더 깔끔하고 관리하기 쉽게 만드는 데 도움이 됩니다. 또한 유연성도 추가됩니다. 예를 들어 내일 `House`클래스에 새 기능을 추가하려면 새 기능과 설정 방법(메서드)을 추가하기만 하면 됩니다. 코드의 다른 부분을 변경하거나 수정할 필요가 없는 거죠. 😃

## 장점
기존 코드를 엉망으로 만들지 않고 새로운 것을 추가할 수 있습니다.

### 참고
- [위키피디아](https://ko.wikipedia.org/wiki/%EB%B9%8C%EB%8D%94_%ED%8C%A8%ED%84%B4)
- [노마드코더](https://www.youtube.com/watch?v=Pzy_MPfGixg&ab_channel=%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94NomadCoders)