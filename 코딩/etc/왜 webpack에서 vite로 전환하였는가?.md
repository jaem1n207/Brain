---
tags:
  - resume
  - performance
  - bundler
---

진행하던 프로젝트의 코드가 점점 늘어남에 따라 **서버 시작 시간**이 늘어나고 **코드 업데이트** 속도가 느려진 게 체감되었습니다. 이에 문제점을 파악해서 속도 개선 작업을 진행하기로 했습니다.
## 서버 시작 시간
소스 모듈을 브라우저에서 실행할 수 있는 파일로 처리하고 연결하는 **번들링** 작업을 Webpack을 사용해 생산성을 향상시키고 있었습니다.

하지만 코드 베이스가 점점 늘어남에 따라 처리해야 하는 JS 모듈의 개수도 증가하고 있었습니다. 현재 프로젝트에는 약 12,000개의 모듈이 존재합니다. 

첫 번째 방법으로 babel-loader에서 swc-loader로 교체하는 작업을 진행했습니다. 그리고 웹팩 5.20버전 이후 사용 가능한 `lazyCompilation` 이라는 옵션으로 코드 분할을 통해 빌드 성능도 대폭 향상될 수 있었습니다.
그럼에도 webpack에서 vite로 결정적인 요인은 초기 번들 청크가 컸지만 모두 충분히 분할할 수 있었고 vite의 성능을 잘 활용할 수 있는 환경이었기 때문입니다.