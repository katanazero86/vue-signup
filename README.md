## vue-signup-assignment
⭕

- Vue3 를 이용하여 제작한 회원가입 페이지
- 회원 가입 페이지는 총 3단계로 구성이 되어있다.

1. 이메일, 비밀번호, 비밀번호 확인 form
2. 이름, 연락처, 주소 form
3. 카드 번호 form

### 프로젝트 구성 및 설명

- Vue3 + TS
```
npm init vue@latest
```

![img.png](img.png)

- scss
```
npm i -D sass sass-loader
```
CSS Preprocessor 인 SASS 를 사용하고자 추가

- vue-router
```
npm i vue-router
```
URL 경로에 따라, 컴포넌트를 렌더링 하고자 추가

- vue-daum-postcode
```
npm i vue-daum-postcode
```
Vue 컴포넌트와 되어있는 다음 우편번호검색 모듈 추가(다음 우편번호 검색 사용 및 Vue 컴포넌트화가 되어있어서 바로 사용이 가능)

- pinia
```
npm i pinia
```
회원 가입 단계를 각 URL 별로 처리하였으므로, 페이지 전환 시 상태값 유지가 필요하여 상태 관리 라이브러인 Pinia 추가

- TypeScript, ESLint, Prettier
Vue 프로젝트 생성 시, 해당 옵션들을 선택하여 구성   
타입스크립트를 사용하여 구성한 이유는, 뷰 앱 개발을 안전하고 생산적으로 만들어주기 때문입니다.(가독성, 컴파일 시점 타입 에러, 리팩토링의 용이성)   
ESLint 와 Prettier 를 사용한 이유는 일관적인 코드 스타일 및 포맷을 유지하고자 하기 위함과 ESLint 규칙과 안티패턴에 대한 에러를 사전에 최소화 하고자 사용했습니다. 

- 프로젝트 구조
```
vue-signup
├── public
├── src
│   ├── assets
│   ├── components
│   ├── composables
│   ├── pages
│   ├── router
│   ├── store
│   ├── utils
│   ├── App.vue
│   └── main.ts
```

public: 정적 자원을 보관 및 서빙   
src: 소스코드를 모아둔 폴더   
src/assets: 정적 자원을 보관   
src/components: 재사용 가능한 Vue 컴포넌트를 모아둔 폴더   
src/composables: 재사용 가능한 함수와 상태를 모아둔 폴더   
src/pages: Vue Page 단위 컴포넌트를 모아둔 폴더   
src/router: 라우타 관련 코드를 보관   
src/store: 상태관리 코드를 보관   
src/utils: 유틸리티 함수를 보관   
src/App.vue: Vue 웹앱 최상위 컴포넌트(Root Component)   
src/main.ts: Vue 웹앱 진입 파일(Entry File)

- 실행 방법   
package.json scripts 속성 참조   
Nodejs 와 npm 이 설치가 되어 있어야 합니다 :)   
  (https://nodejs.org/en/download/package-manager/current) 

```
// dependency install
npm i

// devMode 
npm run dev

// build
npm run build
```

- 개발 환경
```
 System:
    OS: Windows 11 10.0.22631
  Binaries:
    Node: 18.18.0
    Yarn: 1.22.21
    npm: 10.2.1
    pnpm: 8.10.5
  IDEs:
    WebStorm: 2024.1.2
```

---

# vue-signup

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
