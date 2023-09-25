---
tags:
  - network
  - http
---
## HTTP
HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 [프로토콜](https://developer.mozilla.org/ko/docs/Glossary/Protocol)입니다.

> [!NOTE] 프로토콜이란
> 컴퓨터 내부에서, 또는 컴퓨터 사이에서 데이터의 교환 방식을 정의하는 규칙 체계입니다. 기기 간 통신은 교환되는 데이터의 형식에 대해 상호 합의를 요구합니다. 이런 형식을 정의하는 규칙의 집합을 의미합니다.
## HTTP 메소드의 GET, PUT, POST 비교
### GET
GET 방식은 요청하는 데이터가 `HTTP Request Message`의 Header 부분에 url 이 담겨서 전송된다. 때문에 url 상에 `?` 뒤에 데이터가 붙어 request 를 보내게 되는 것이다. 이러한 방식은 url 이라는 공간에 담겨가기 때문에 전송할 수 있는 데이터의 크기가 제한적이다. 또 보안이 필요한 데이터에 대해서는 데이터가 그대로 url 에 노출되므로 `GET`방식은 적절하지 않다. (ex. password)
### PUT

### POST
POST 방식의 request 는 `HTTP Request Message`의 Body 부분에 데이터가 담겨서 전송된다. 때문에 바이너리 데이터를 요청하는 경우 POST 방식으로 보내야 하는 것처럼 데이터 크기가 GET 방식보다 크고 보안면에서 낫다.(하지만 보안적인 측면에서는 암호화를 하지 않는 이상 고만고만하다.)

그렇다면 이러한 특성을 이해한 뒤에는 어디에 적용되는지를 알아봐야 그 차이를 극명하게 이해할 수 있다. 우선 GET 은 가져오는 것이다. 서버에서 어떤 데이터를 가져와서 보여준다거나 하는 용도이지 서버의 값이나 상태 등을 변경하지 않는다. SELECT 적인 성향을 갖고 있다고 볼 수 있는 것이다. 반면에 POST 는 서버의 값이나 상태를 변경하기 위해서 또는 추가하기 위해서 사용된다.

부수적인 차이점을 좀 더 살펴보자면 GET 방식의 요청은 브라우저에서 Caching 할 수 있다. 때문에 POST 방식으로 요청해야 할 것을 보내는 데이터의 크기가 작고 보안적인 문제가 없다는 이유로 GET 방식으로 요청한다면 기존에 caching 되었던 데이터가 응답될 가능성이 존재한다. 때문에 목적에 맞는 기술을 사용해야 하는 것이다.

#### 결론
`GET`은 데이터를 검색, `PUT`은 데이터를 업데이트하거나 생성하며, `POST`는 새 데이터를 배타적으로 생성합니다. 웹 서비스가 정확하고 안전하게 동작할 수 있도록 적절한 방법을 선택하는 것이 중요합니다.
## 참고
- [Jbee/Interview_Question_for_Beginner](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/main/Network/README.md#http%EC%9D%98-get%EA%B3%BC-post-%EB%B9%84%EA%B5%90)