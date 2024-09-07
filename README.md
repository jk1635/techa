# Fingerlabs Assignment



## 1. 프로젝트 설명 및 구조

<div>   
  <img width="700px" src="https://github.com/jk1635/techa/blob/main/docs/result-1.png" />
  <img width="700px" src="https://github.com/jk1635/techa/blob/main/docs/result-2.png" />
  <img width="700px" src="https://github.com/jk1635/techa/blob/main/docs/result-3.png" />
</div>

- Techa Miya NFT(Non-Fungible Token) 이미지를 볼 수 있는 갤러리 형태의 페이지를 구현
- 0번부터 999번까지 총 1000개의 이미지를 보여주며, attributes 기반 필터링 및 토큰 번호 검색 기능 제공

<details>
<summary><strong>프로젝트 구조 (더보기)</strong></summary>

```shell
src
┣ assets
┃ ┗ icons
┃ ┃ ┣ arrow-down.svg
┃ ┃ ┣ arrow-up.svg
┃ ┃ ┣ check.svg
┃ ┃ ┣ close.svg
┃ ┃ ┣ refresh.svg
┃ ┃ ┗ search.svg
┣ components
┃ ┣ Dialog.tsx
┃ ┣ Gallery.tsx
┃ ┣ Header.tsx
┃ ┣ Image.tsx
┃ ┗ Sidebar.tsx
┣ data
┃ ┗ techamiya_traits.json
┣ hooks
┃ ┗ useFetchData.ts
┣ libs
┃ ┗ ApiClient.ts
┣ pages
┃ ┗ Home.tsx
┣ stores
┃ ┗ atoms.ts
┣ styles
┃ ┣ global.ts
┃ ┗ theme.ts
┣ types
┃ ┗ index.ts
┣ App.tsx
┣ main.tsx
┗ vite-env.d.ts
```

</details>

## 2. 실행 방법

```sh
> yarn install
> yarn start
```

## 3. 주요 기능 리스트

- 0번에서 999번까지의 데이터 로드
  - `react-query`와 Promise.all을 사용하여 0번부터 999번까지의 데이터를 동시에 패칭
  - staleTime을 통해 데이터를 일정 시간 동안 캐싱하여 불필요한 재요청 방지
- Attributes 필터링
  - 대분류 `trait_type`과 소분류 `value`를 기반으로 데이터 필터링
  - refresh 버튼으로 필터링된 데이터 및 토큰 번호 검색 데이터 초기화
- 토큰 번호 검색
  - `name` 데이터에 있는 토큰 번호를 이용해 검색 기능 구현
  - 숫자만 입력 가능 및 최대 4자리까지 입력되도록 제한
- Lazy Loading
  - `react-intersection-observer`를 사용하여 갤러리의 이미지를 Lazy Load, 페이지 로딩 속도 개선
- 다이얼로그
  - 클릭한 카드의 `image`와 `name`을 다이얼로그에 띄움
  - 다이얼로그 닫기 버튼 및 배경 클릭 시 닫기 기능 구현
  - 스크롤 방지 추가
- 최적화
  - `useCallback`, `useMemo`, `React.memo`를 사용하여 불필요한 렌더링 최소화

## 4. 기술 스택 및 라이브러리

- React
- TypeScript
- Emotion
- Jotai
- React Query
- Vite
- React Intersection Observer
