---
tags:
  - Design-Pattern
  - Architecture
---
파사드는 "건물의 정면"을 의미합니다. 건물의 외관(파사드)이 복잡한 구조와 세부 사항을 숨기는 것처럼, 파사드 패턴은 복잡한 시스템을 유저가 더 간단하고 쉽게 상호 작용할 수 있도록 만들어야 할 때 사용됩니다.

파사드 패턴을 사용할 때는 간단하고 사용하기 쉬운 메서드 집합이 있는 클래스를 구현합니다. 이러한 메서드는 시스템의 내부 구성 요소와 상호 작용하여 복잡한 작업을 처리하고, 유저에게 시스템과 쉽게 상호 작용할 수 있는 방법을 제공합니다.

예를 들어, 조명, 온도 조절기, 보안 장치, TV가 모두 연결되어 있는 '스마트 홈'이 있다고 가정해보겠습니다. 집을 나갈 때마다 에어컨, 조명, TV를 끄고 보안 모드를 작동시키는 것을 잊으면 안 됩니다. 하나의 동작에 다른 많은 작은 동작이 필요한데 이는 파사드 패턴을 설명할 수 있는 좋은 예시입니다.

## 구현
스마트홈 파사드를 구현해보겠습니다.
```typescript
class SmartHomeFacade {
  private lights: Lights

  private airConditioner: AirConditioner

  private security: Security

  private tv: TV

  // 생성자에서 제어할 서브시스템을 초기화합니다.

  constructor() {
    this.lights = new Lights()

    this.airConditioner = new AirConditioner()

    this.security = new Security()

    this.tv = new TV()
  }

  // 집을 나설 때, 모든 조명을 끄고, 에어컨을 끄고, 보안을 켭니다.

  public leaveHome(): void {
    this.lights.turnOffAll()

    this.airConditioner.off()

    this.security.arm()
  }

  // 집에 돌아오면 현관 조명을 켜고, 에어컨을 켜고, 보안을 해제합니다.

  public arriveHome(): void {
    this.lights.turnOnEntrance()

    this.airConditioner.on()

    this.security.disarm()
  }

  // 영화를 본다면, 거실 조명을 어둡게 하고, TV 채널을 영화 채널로 바꾸고, 에어컨을 켭니다.

  public movieMode(): void {
    this.lights.dimLivingRoom()

    this.tv.setChannel("Movie Channel")

    this.airConditioner.on()
  }

  // 취침한다면, 모든 조명을 끄고, 에어컨을 끄고, 보안을 켭니다.

  public sleepMode(): void {
    this.lights.turnOffAll()

    this.airConditioner.off()

    this.security.arm()
  }
}

const smartHome = new SmartHomeFacade()

smartHome.leaveHome()

smartHome.arriveHome()

smartHome.movieMode()

smartHome.sleepMode()

```

이제 스마트 홈에 파사드가 생겼습니다. 파사드 패턴 덕분에 <mark style="background: #ADCCFFA6;">복잡성을 숨기고</mark> 사용하기 쉬운 인터페이스를 얻을 수 있습니다. 필요한 메서드만 호출하면 그 뒤에서 일어나는 알 필요 없습니다.

조금 더 예를 들어보자면, API에서 많은 데이터를 가져오거나 API로 보낼 때 파사드 패턴을 사용할 수 있습니다. 유지 관리 및 이해가 어려울 수 있는 수많은 "fetch" 호출이 앱 전체에 분산되어 있는 대신, 이러한 모든 작업을 단일 파사드 뒤에 숨길 수 있는 거죠.

코드로 예시를 들어보겠습니다.
```typescript
class ApiFacade {
  private baseUrl: string

  // 생성자에서 `baseUrl`프로퍼티가 전달되는 ApiFacade 클래스를 생성합니다.

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  // API에서 데이터를 보내는 메서드를 정의합니다.

  async post(path: string, data: any) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })

    return response.json()
  }

  // API에서 데이터를 가져오는 메서드를 정의합니다.

  async get(path: string) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "GET",
    })

    return response.json()
  }
}

// 기본 URL을 설정합니다.

const api = new ApiFacade("https://jsonplaceholder.typicode.com")

// 경로와 데이터를 호출해서 사용할 수 있습니다.

const users = await api.get("/users")

const createdUser = await api.post("/users", {
  name: "John Doe",
  age: 30,
})
```

한 단계 더 나아가 모든 API 액션에 대한 메서드를 만들 수 있습니다. (getUsers, createUser)
```ts
class ApiFacade {
  ...
  
  // API 액션에 대한 메서드를 정의합니다.
  async getUsers() {
    return this.get("/users")
  }

  async createUser(data: any) {
    return this.post("/users", data)
  }
}

// 파사드를 사용해 더욱 의미를 알아보기 쉬워졌습니다.
const users = await api.getUsers()

const createdUser = await api.createUser({
  name: "John Doe",
  age: 30,
})

```

### 참고
- [위키피디아](https://ko.wikipedia.org/wiki/%ED%8D%BC%EC%82%AC%EB%93%9C_%ED%8C%A8%ED%84%B4)
- [노마드코더](https://www.youtube.com/watch?v=XTcsR_-GrBY&ab_channel=%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94NomadCoders)