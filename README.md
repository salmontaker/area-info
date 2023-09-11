# Area Info

<img src="https://github.com/salmontaker/area-info/assets/93248349/dcd442c0-3338-4ad2-b371-2ef3e7c03114" width="192" height="192"><br>

특정 지역의 데이터를 시계열 차트로 나타내는 서비스입니다.

배포주소 : https://area-info.vercel.app

## 개발 기간

2023.09.10 ~ 2023.09.11 (2일)

## 개발 환경

### Developement

<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=for-the-badge&logo=nodedotjs"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>

### Convention

<img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/lint staged-white?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

### Route

<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge&logo=npm"/> 

## 기능 구현

- 요구사항 명세 : https://github.com/salmontaker/area-info/issues/1
- 시계열 차트 만들기: https://github.com/salmontaker/area-info/pull/5
- 호버 기능 구현: https://github.com/salmontaker/area-info/pull/6
- 필터링 기능 구현: https://github.com/salmontaker/area-info/pull/7

## 프로젝트 데모

https://github.com/salmontaker/area-info/assets/93248349/3ef9e7d4-2f3b-447e-989f-dbf8983dce4b

## 프로젝트 구조

```
src
 ┣ assets
 ┃ ┗ mock_data.json
 ┣ components
 ┃ ┣ CustomTooltip.styled.ts
 ┃ ┣ CustomTooltip.tsx
 ┃ ┣ TimeSeriesChart.styled.ts
 ┃ ┗ TimeSeriesChart.tsx
 ┣ context
 ┃ ┗ DataContext.tsx
 ┣ hooks
 ┃ ┗ useCustomContext.ts
 ┣ pages
 ┃ ┣ MainPage.styled.ts
 ┃ ┣ MainPage.tsx
 ┃ ┗ NotFoundPage.tsx
 ┣ service
 ┃ ┣ DataService.tsx
 ┃ ┗ PageRouter.tsx
 ┣ styles
 ┃ ┣ base
 ┃ ┃ ┣ DefaultTheme.ts
 ┃ ┃ ┣ GlobalStyle.ts
 ┃ ┃ ┗ styled.d.ts
 ┃ ┗ constants
 ┃ ┃ ┣ colors.ts
 ┃ ┃ ┣ flex.ts
 ┃ ┃ ┗ fontSize.ts
 ┣ App.tsx
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts
```

## 로컬 실행방법

1. 프로젝트를 clone합니다.

```shell
git clone https://github.com/salmontaker/area-info.git
```

2. 프로젝트 실행에 필요한 라이브러리를 설치합니다.

```shell
npm install
```

3. 설치가 끝났다면 프로젝트를 실행합니다.

```shell
npm start
```