# Counter With Mobx 1

Mobxを使ったカウンターサンプルプログラム

## `src/stores/counter.ts`

- MobXで作成したカウンター用のストア
- @decoratorを使わない書き方をした
- 状態管理用の変数に`observable.box`を利用した。
  - `observable.box`を使用すると値の取得は`get`、値の設定は`set`を使う。
  - `observable.box`は`observe`というメソッドが使える
  - `observe`は値に変化があった時にcallbackを設定できる。

## `src/components/counter.tsx

- コンポーネントを`inject`と`observer`でラップする
- `props`に`counter`ストアが入ってくる

## `src/App.tsx`

- カウンター用のストアを作成し、`Provider`で下層のコンポーネントへストアを提供する