# React + TypeScript + Vite

## 필수 설치 프로그램

1. [Node LTS v20.16.0](https://nodejs.org/en/download/package-manager/current)
2. [Git](https://git-scm.com/downloads)

## 기본 라이브러리 리스트

1. eslint
2. prettier
3. axios
4. router
5.

## dotenv 설정

프로젝트 Checkout 후 Navigate 폴더에 보면 `.env.sample`이라는 파일이 있습니다.

개발환경에서 프로젝트를 정상적으로 구동하기 위해선 해당 파일을 `.env`라는 파일로
복사해 넣어야 합니다.

**_주의: .env.sample 파일을 삭제하거나, .env 파일을 Push하지 마시오!_**

### dotenv 구조

| Env                | Description                                                                                                                            |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_APP_API_URL` | API Url 입니다. 기본 값은 `http://localhost:8080`으로 설정되어있으며, Context Path의 마지막에 반드시 `슬래시(/)`를 빼 주시기 바랍니다. |
| `VITE_APP_CDN_URL` | CDN 서비스의 Url. 기본 값은 `http://localhost:3000`으로 설정되어있으며, 이미지 등 리소스 Url 작성 시 사용됩니다. _필수_                |

## 프로젝트 실행하기

프로젝트는 다음과 같은 명령어로 실행할 수 있습니다.

```console
# npm run dev
프로젝트 실행
```

실행 후 [http://localhost:3000](http://localhost:3000)에서 확인하실 수 있습니다.

## 참고 사이트

[초기세팅](https://velog.io/@junghyeonsu/React-create-react-app-Typescript-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC)
