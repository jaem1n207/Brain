class SmartHomeFacade {
  private lights: Lights;
  private airConditioner: AirConditioner;
  private security: Security;
  private tv: TV;

  // 생성자에서 제어할 서브시스템을 초기화합니다.
  constructor() {
    this.lights = new Lights();
    this.airConditioner = new AirConditioner();
    this.security = new Security();
    this.tv = new TV();
  }

  // 집을 나설 때, 모든 조명을 끄고, 에어컨을 끄고, 보안을 켭니다.
  public leaveHome(): void {
    this.lights.turnOffAll();
    this.airConditioner.off();
    this.security.arm();
  }

  // 집에 돌아오면 현관 조명을 켜고, 에어컨을 켜고, 보안을 해제합니다.
  public arriveHome(): void {
    this.lights.turnOnEntrance();
    this.airConditioner.on();
    this.security.disarm();
  }

  // 영화를 본다면, 거실 조명을 어둡게 하고, TV 채널을 영화 채널로 바꾸고, 에어컨을 켭니다.
  public movieMode(): void {
    this.lights.dimLivingRoom();
    this.tv.setChannel('Movie Channel');
    this.airConditioner.on();
  }

  // 취침한다면, 모든 조명을 끄고, 에어컨을 끄고, 보안을 켭니다.
  public sleepMode(): void {
    this.lights.turnOffAll();
    this.airConditioner.off();
    this.security.arm();
  }
}

const smartHome = new SmartHomeFacade();

smartHome.leaveHome();
smartHome.arriveHome();
smartHome.movieMode();
smartHome.sleepMode();

class ApiFacade {
  private baseUrl: string;

  // 생성자에서 `baseUrl`프로퍼티가 전달되는 ApiFacade 클래스를 생성합니다.
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // API에서 데이터를 보내는 메서드를 정의합니다.
  async post(path: string, data: any) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }

  // API에서 데이터를 가져오는 메서드를 정의합니다.
  async get(path: string) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'GET',
    });

    return response.json();
  }
}

// 기본 URL을 설정합니다.
const api = new ApiFacade('https://jsonplaceholder.typicode.com');

// 경로와 데이터를 호출해서 사용할 수 있습니다.
const users = await api.get('/users');
const createdUser = await api.post('/users', {
  name: 'John Doe',
  age: 30,
});

// 한 단계 더 나아가 모든 API 액션에 대한 메서드를 만들 수 있습니다. (getUsers, createUser)
class ApiFacade {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async post(path: string, data: any) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }

  async get(path: string) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'GET',
    });

    return response.json();
  }

  // API 액션에 대한 메서드를 정의합니다.
  async getUsers() {
    return this.get('/users');
  }

  async createUser(data: any) {
    return this.post('/users', data);
  }
}

const api = new ApiFacade('https://jsonplaceholder.typicode.com');

// 경로와 데이터를 호출해서 사용할 수 있습니다.
const users = await api.getUsers();
const createdUser = await api.createUser({
  name: 'John Doe',
  age: 30,
});
