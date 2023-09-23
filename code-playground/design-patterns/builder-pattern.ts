// Builder Pattern

// 기본 속성만 있는 House 클래스를 구현합니다.
class House {
  public rooms = 0;
  public bathrooms = 0;
  public kitchens = 0;
  public windows = 0;
  public hasBalcony = false;
  public hasBackyard = false;
}

class HouseBuilder {
  private house: House;

  // HouseBuilder 클래스를 생성합니다.
  constructor() {
    this.house = new House();
  }

  // HouseBuilder 클래스의 속성을 설정하는 메서드를 정의합니다.
  setRooms(rooms: number) {
    this.house.rooms = rooms;
    return this;
  }

  setBathrooms(bathrooms: number) {
    this.house.bathrooms = bathrooms;
    return this;
  }

  setKitchens(kitchens: number) {
    this.house.kitchens = kitchens;
    return this;
  }

  setWindows(windows: number) {
    this.house.windows = windows;
    return this;
  }

  setHasBalcony(hasBalcony: boolean) {
    this.house.hasBalcony = hasBalcony;
    return this;
  }

  setHasBackyard(hasBackyard: boolean) {
    this.house.hasBackyard = hasBackyard;
    return this;
  }

  // 마지막으로 create house를 반환하는 'build' 메서드를 정의합니다.
  public build(): House {
    return this.house;
  }
}

const houseOne = new HouseBuilder()
  .setRooms(4)
  .setBathrooms(3)
  .setKitchens(2)
  .setWindows(6)
  .setHasBalcony(true)
  .setHasBackyard(true)
  .build();

const houseTwo = new HouseBuilder()
  .setRooms(2)
  .setBathrooms(1)
  .setKitchens(1)
  .setWindows(4)
  .setHasBalcony(false)
  .setHasBackyard(false)
  .build();
