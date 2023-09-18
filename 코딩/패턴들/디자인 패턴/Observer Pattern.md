---
tags:
  - Design-Pattern
  - Architecture
---
옵저버 패턴을 사용하면 애플리케이션의 일부를 관찰하여 한 부분이 변경되면 해당 부분에 의존하는 다른 모든 부분이 자동으로 업데이트 되도록 할 수 있습니다. 

예를 들어, 뉴스레터를 구독하는 것처럼 앱의 다양한 부분이 다른 부분을 <mark style="background: #ADCCFFA6;">구독</mark>할 수 있는 구독 시스템을 정의할 수 있습니다. 구독 중인 부분(뉴스레터)에 변경 사항이 있으면 모든 구독자에게 자동으로 변경 사항에 대한 알림이 전송됩니다. 이렇게 하면 공유할 새로운 내용이 있을 때마다 메일함에 새 버전의 뉴스레터가 수신되는 것과 마찬가지로 앱 구성 요소가 계속 업데이트됩니다.

옵저버 패턴은 특정 객체를 구독할 수 있는데, 구독하는 주체를 `Observer`라 하고. 구독 가능한 객체를 `Observable`이라 합니다. 이벤트가 발생할 때 마다 `Observable`은 모든 `Observer`에게 <mark style="background: #ADCCFFA6;">이벤트를 전파</mark>합니다. 여기서 `Observable`는 우리가 관심 있는 클래스이고, `Observer`는 객체를 관찰하는 클래스라고 생각하면 됩니다. 

### 특징
`Observable`객체는 보통 3가지 주요 특징을 포함합니다.

- `subscribe()`: `Observer`를 `Observer`배열에 추가합니다.
- `unsubscribe()`: `Observer`배열에서 `Observer`를 제거합니다.
- `notify()`: 등록된 모든 `Observer`들에게 이벤트를 전파합니다.

- `observers`: 이벤트가 발생할 때마다 전파할 `Observer`들의 배열입니다.

### 구현
음악 페스티벌을 상상해 보겠습니다. 여기엔 밴드라는 `Observable`, 많은 `Observers`들(팬들, 보안 요원, 조명 등)이 있을 겁니다. 서로 다른 모든 `Observer`가 구현할 수 있는 인터페이스를 구현해보겠습니다.

위에서 언급했듯이 `Observable` 인터페이스에는 3가지 메서드(subscribe, unsubscribe, notify)가 있어야 합니다.
```typescript
interface Observable {
	// 옵저버 추가
	subscribe: (observer: Observer) => void;
	// 옵저버 제거
	unsubscribe: (observer: Observer) => void;
	// 메시지 전파
	notify: (event: string) => void;
}
```

이제 `Observable`(밴드)를 간단히 구현해 보겠습니다. 
```typescript
class Band implements Observable {
	private observers: Observer[] = [];
  
	subscribe(observer: Observer) {
		this.observers.push(observer);
	}

	unsubscribe(observer: Observer) {
		this.observers = this.observers.filter((o) => o !== observer);
	}
	
	notify(event: string) {
		this.observers.forEach((o) => o.onNotify(event));
	}
	
	// START 이벤트를 통해 Observer에게 알립니다.
	startConcert(): void {
		this.notify('START');
	}
	
	playSong(): void {
		this.notify('PLAY_SONG');
	}
	
	endConcert(): void {
		this.notify('END');
	}
}
```

`subscribe`함수를 통해 `Observer`를 등록하고 반대로 `unsubscribe`함수를 통해 등록을 해지할 수 있습니다. 그리고 `notify`함수를 통해 모든 `Observer`에게 이벤트를 전파할 수 있습니다.

`Observer`가 되려면 **onNotify**라는 메서드가 있어야 합니다. 그리고 문자열 타입의 `event`를 인수로 받습니다.
```typescript
interface Observer {
	onNotify: (event: string) => void;
}
```

팬들, 보안 요원, 조명을 `Observer`로 구현한 예제를 보겠습니다.
```typescript
// 팬
class Fan implements Observer {
	onNotify(event: string): void {
		if (event === 'START') {
			console.log('환호성');
		} else if (event === 'END') {
			console.log('즐거웠어요');
		}
	}
}

// 보안 요원
class Security implements Observer {
	onNotify(event: string): void {
		if (event === 'START') {
			console.log('문 닫기');
		} else if (event === 'END') {
			console.log('문 열기');
		}
	}
}

// 조명
class Lights implements Observer {
	onNotify(event: string): void {
		if (event === 'PLAY_SONG') {
			console.log('불이 켜짐')
		}
	}
}
```

아직까지 `Observable`과 `Observer`를 연결하지 않았기 때문에 알림을 받을 수 없습니다. 이 함수들이 `Observer`로 작동하기 위해서는 `Observable`의 `subscribe`함수를 사용해야 합니다.
```typescript
// Observer를 생성합니다.
const fan = new Fan();

const security = new Security();

const lights = new Lights();
  

// band를 초기화합니다.
const band = new Band();


// Observer를 band에 등록합니다.
band.subscribe(fan);

band.subscribe(security);

band.subscribe(lights);


// 콘서트가 시작될 때, 콘서트가 끝날 때, 노래가 재생될 때 모든 Observer에게 알림이 전송됩니다.
band.startConcert();

band.playSong();

band.endConcert();
```

이제 밴드와 팬들, 보안, 조명이 모두 각자의 업무를 개별적으로 각각 처리할 수 있는 시스템을 갖추게 되었습니다. 동시에 구독 및 알림 메커니즘을 통해 동기화 상태를 유지합니다. 각 부분이 깔끔하고 유연한 방식으로 정보를 공유할 수 있게 된 것입니다. 👍

### 장점
**옵저버 패턴**을 사용하는 것은 <mark style="background: #ADCCFFA6;">관심사의 분리</mark>와 <mark style="background: #ADCCFFA6;">단일 책임의 원칙</mark>을 강제하기 위한 좋은 방법입니다. `Observer`객체는 `Observable`객체와 강결합되어있지않고 언제든지 분리될 수 있습니다. `Observable`객체는 이벤트 모니터링의 역할을 갖고, `Observer`는 받은 데이터를 처리하는 역할을 갖게 됩니다.
### 단점
`Observer`가 복잡해지면 모든 `Observer`들에 알림을 전파하는 데 성능 이슈가 발생할 수 있습니다.

---

## 참고
- [패턴즈](https://patterns-dev-kr.github.io/design-patterns/observer-pattern/)
- [위키피디아](https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4)
- [노마드코더](https://www.youtube.com/watch?v=bdcxCpB68Xs&ab_channel=%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94NomadCoders)