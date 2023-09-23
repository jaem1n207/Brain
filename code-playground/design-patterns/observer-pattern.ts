interface Observer {
  // 메시지 수신
  onNotify: (event: string) => void;
}

interface Observable {
  // 옵저버 추가
  subscribe: (observer: Observer) => void;
  // 옵저버 제거
  unsubscribe: (observer: Observer) => void;
  // 메시지 전파
  notify: (event: string) => void;
}

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
      console.log('불이 켜짐');
    }
  }
}

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
