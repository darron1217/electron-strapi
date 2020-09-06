# Electron Strapi application

[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/darron1217/electron-strapi)](https://github.com/darron1217/electron-strapi/tags)

## 현재 이슈
1. asar로 빌드시 [readdirSync이슈](https://github.com/electron/electron/pull/24062#issuecomment-687702317) 가 존재하여 해결될때까지 asar 보류
(readdirSync 미작동으로 strapi config-loader.js에서 config를 못읽어오고, DB연결 에러로 이어짐)

## 설치

1. (윈도우의 경우) `npm install --global windows-build-tools`

2. `npm install`

3. `npm run build`

4. `electron-rebuild`

## 실행

1. `npm run app`

## 빌드 (윈도우)

1. `npm run pack:win`
