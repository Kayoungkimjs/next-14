# SSG, SSR, ISR

1. `revalidate = 초지정`
2. fetch next 옵션 or cache 사용 (13+ ver)

ISR
fetch 두번째 옵션에 `next: {revalidate: 시간}` 추가, 명시한 시간 간격만큼 데이터 호출

SSR
`next: {revalidate: 0}` or `cache: no-store`. 요청이 올 떄마다 revalidate(HTML을 새롭게 만들어 줌)

# Next.js 13

## App Router

기존 page router를 대체하는 개념
`_document`(정적 공통 마크업), `_app`(전체 페이지 공유 로직) => 디렉토리 단위로 제공되는 `layout` 등장

## Metadata

Head 태그에 메타 태그 작성 => `layout` or `page`에서 export 하여 사용
next/head, Head 태그 사용할 수 없음

## server side rendering

`gerServerSideProps()` 함수 사용 => `fetch` api 사용, `async await`로 비동기 처리
`getStaticPath` => `generateStaticParams`

# Next.js 14

## Metadata

UX 관련 viewport, colorScheme, themeColor 정보는 기존 metadata 타입과 분리되어 별도 정의

```typescript
export const metadata: Metadata = {
    metadataBase: new URL(META_URL),
    title: ...
    description: ..
}

export const viewprt: Viewport = {
    themeColor: 'black'
}
```

<!-- ## route group

실제 라우팅할 경로로 잡히지 않고 단순히 가독성을 위한 그룹핑 역할을 수행

app 디렉토리 아래에서 "()"를 사용

예를 들어, 로그인 전후를 기준으로 경로를 그룹핑하고 싶은경우 아래와 같이 사용

```typescript
app
    ㄴ(beforelogin)
        ㄴ login
        ㄴ signup
    ㄴ(afterlogin)
        ㄴ content
        ㄴ explore
```

## parallel route

같은 디렉토리 레벨의 page.tsx 경로에 page.tsx외에 다른 컴포넌트를 등장시킬수 있음
app 디렉토리 아래에서 "@"를 사용

```typescript
app
    ㄴ(beforelogin)
        ㄴ@modal
        ㄴlogin
```

## intercepting route

parallel route와 함께 사용시, 기존 화면에서 위에 그려지게 처리할 수 있음

단 이 기능은 다른 페이지에서 "next/Link" 컴포넌트를 이용해서 이동했을 때만 동작하고

브라우저 창에 주소를 입력해서 접근하거나, 새로고침해서 접근할 경우에는 기존 app router 동작대로, page.tsx 기반으로 라우팅됨


## private folder

_components 와 같이 사용할 수 있고, 해당 폴더는 next가 route로 인식하지 않음

따라서 route group 처럼 폴더 정리용으로 사용가능

## 예약어

```typescript
page.tsx layout.tsx template.tsx default.tsx 등의 예약어는 철자가 하나라도 틀릴 경우 제대로 동작하지 않음

(웃기는건 일부는 제대로 동작하고 일부는 동작하지 않음. 그래서 막상 버그를 맞닥뜨리면 어느지점이 문제인지 디버깅하기가 쉽지않을 수 있음. )

특히 소문자, 대문자 여부 주의할 것

page.tsx를 예로 들자면, 파일명을 실수로 Page.tsx로 할 경우 이를 찾아내기가 쉽지않음 주의할것

```


## useSelectedLayoutSegment
```typescript
클라이언트 컴포넌트에서만 사용가능

현재 컴포넌트가 사용되고 있는 상위 디렉토리 명을 리턴

location.pathname과 용례가 비슷하나, 구분자 없이 상위 디렉토리 명만 리턴한다는 점에서 다름

const segment:string = useSelectedLayoutSegment()
/**
 * 예를 들어, 현재 컴포넌트가 import되고 있는 곳이 home일 경우
 * home을 리턴
 * **/
```

## useSelectedLayoutSegments
```typescript
클라이언트 컴포넌트에서만 사용가능

route가 중첩으로 구성되어 있을 경우 useSelectedLayoutSegments를 사용해서 속한 모든 segment를 배열 형태로 가져올 수 있음

const segments:string[] = useSelectedLayoutSegments()

/**
 * 예를 들어, 현재 컴포넌트가 import되고 있는 곳이 compose/tweet일 경우
 * ['compose','tweet'] 을 리턴
 * **/
``` -->
