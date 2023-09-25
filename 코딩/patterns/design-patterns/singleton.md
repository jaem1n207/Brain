---
tags:
  - Design-Pattern
  - Architecture
---
**싱글톤 패턴**은 클래스에 인스턴스가 하나만 있도록 보장하고 해당 인스턴스에 대한 전역 액세스를 제공하기 위한 패턴입니다. 데이터베이스 연결, logger 클래스, 구성 등과 같이 클래스 인스턴스화를 하나의 개체로 제한하는 것이 중요한 상황에서 사용됩니다.
### 왜 싱글톤을 사용하나요?
1. 액세스 제어: 클래스의 인스턴스 하나만 메모리에 있고 전역 액세스 지점이 있어 일관된 동작을 보장합니다.
2. 지연 초기화: 메모리는 필요한 경우에만 사용됩니다.
### 싱글톤의 단점
1. 전역 상태: 본질적으로 전역 인스턴스를 생성하므로 종속성을 숨기고 시스템의 투명성을 떨어뜨릴  수 있습니다.
2. 테스팅: 싱글톤은 테스트 사례 간에 공유된 상태를 전달하기 때문에 테스트 시나리오에서 문제가 발생할 수 있습니다.

## 구현
하나의 인스턴스만을 유지하기 위해 생성에 특별한 제약을 걸어둬야 합니다. 그리고 유일한 단일 객체를 반환할 수 있도록 정적 메소드드를 지원해야 합니다. 또한 유일한 단일 객체를 참조할 정적 참조변수가 필요합니다.
```java
public class Singleton {
    private static Singleton singletonObject;

    private Singleton() {}

    public static Singleton getInstance() {
        if (singletonObject == null) {
            singletonObject = new Singleton();
        }
        return singletonObject;
    }
}
```
클래스 로딩시 인스턴스가 생성됩니다. 이 방식은 간단하지만 필요 여부에 관계없이 인스턴스가 생성됩니다. 따라서 멀티스레딩 환경에서 이 방식을 적용하면 문제가 발생할 수 있습니다. 동시에 접근하다가 하나만 생성되어야 하는 인스턴스가 2개 생성될 수 있기 때문입니다. 그렇기 때문에 인스턴스가 초기화되기 전에 두 스레드가 동시에 `getInstance()`를 호출하면 두 스레드 모두 결국 새 인스턴스를 생성하게 되어 단일 인스턴스를 갖는 싱글톤 패턴의 기본 규칙을 위반하므로 이를 동기화시켜야 멀티스레드 환경에서의 문제가 해결됩니다.

멀티스레딩 문제를 처리하는 방법을 알아보겠습니다.
### syncronized 키워드 사용
`Java`와 같은 언어에서는 `syncronized` 키워드를 사용해 `getInstance` 메소드가 동기화되었는지 확인하여 주어진 시간에 하나의 스레드만 이 메소드를 실행할 수 있도록 할 수 있습니다.
```java
public class Singleton {
    private static Singleton singletonObject;

    private Singleton() {}

    public static synchronized Singleton getInstance() {
        if (singletonObject == null) {
            singletonObject = new Singleton();
        }
        return singletonObject;
    }
}
```
`JS`에서 동시성 모델은 `이벤트 루프`를 기반으로 합니다. 이는 본질적으로 Java 언어와 같은 멀티스레딩 문제가 없음을 의미합니다. 하지만 웹 환경에 Web Worker가 도입되면 이론적으로는 동시성에 직면할 수도 있겠죠.
### DCL (Double Checking Locking)
`syncronized` 키워드보다 좀 더 효율적으로 제어할 수 있는 DCL 방식을 활용할 수 있습니다. `syncronized` 키워드로 전체 `getInstance` 메소드를 동기화하는 것은 비효율적입니다. 대신 DCL 방식을 사용하면 먼저 인스턴스가 생성되었는지 확인하고, 생성되지 않았다면 동기화를 수행합니다. 이런 방식으로 동기화된 블록은 단 한 번, 즉 처음으로 실행됩니다. 하지만 멀티코어 환경에서 동작할 때, 하나의 CPU를 제외하고는 다른 CPU가 lock이 걸리게 됩니다. 그렇기 때문에 다른 방법이 필요해보입니다.
### Early or Eager Initialization
```java
public class Singleton {
    private static volatile Singleton singletonObject = new Singleton();

    private Singleton() {}

    public static Singleton getSingletonObject() {
        return singletonObject;
    }
}
```
클래스가 로딩되는 시점에 싱글톤 인스턴스를 생성합니다. 이는 static 필드와 initializer가 파일에 나타나는 순서대로 실행되고 스레드로부터 안전하다는 것을 활용합니다. 이렇게 하면 스레드가 요청하기 전에 인스턴스가 생성됩니다.
## 결론
멀티스레딩 환경에서 싱글톤의 주요 문제는 동시 스레드에 대해 하나의 인스턴스만 생성되도록 보장하는 것입니다.JS 환경은 기존 멀티스레드 언어와 동일한 방식으로 이러한 문제에 직면하지 않지만, Web Workers 및 유사한 기술의 경우 개발자들은 동시에 발생할 수 있는 위험에 대해 알아야 합니다. 싱글톤이 이러한 방식으로 액세스되기를 원한다면 항상 동시성을 염두에 두고 설계해야 하는 것이 중요합니다.

## 참고
- [Jbee/Interview_Question_for_Beginner](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/DesignPattern/README.md)