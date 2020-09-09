# Counter With Mobx 2

Mobxを使ったカウンターサンプルプログラム。

このサンプルではカウンターのコンポーネントを
PresentationとContainerコンポーネントに分離している。

## `src/components/Counter.tsx

- Presentationなのでpropsを受け取り、propsを使って表示するだけ

## `src/containers/CounterContainer.tsx

- `inject`でカウンターストアを注入
- `Counter`コンポーネントをラップしたコンテナーコンポーネントとして作成