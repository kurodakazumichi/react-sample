# Counter With Context

ReactContextを使ったカウンターサンプルプログラム



## new: `src/contexts/counter.ts`

```ts
import { createContext } from 'react';

// ①Contextの方を定義
export interface ICounterContext {
  count: number,
  increment: () => void,
  decrement: () => void,
}

// ②Contextを作成
const CounterContext = createContext<ICounterContext|null>(null);
export default CounterContext;
```

ContextはReactの`createContext`で作成するだけ。

作成されたContextの中には`Provider`と`Consumer`コンポーネントが存在する。



## new: `src/components/Counter.tsx`

```tsx
import React from 'react';
import CounterContext from '../contexts/counter';

const Counter:React.FC = () => {
  return (
    // ①Consumerコンポーネントからcontextを受け取る
    <CounterContext.Consumer>
      {(context) => {

        if (!context) {
          throw new Error("counter context not found");
        }

        // ②contextの内容を設定する
        return (
          <React.Fragment>
            <div>count: {context.count}</div>
            <button onClick={context.increment}>+1</button>
            <button onClick={context.decrement}>-1</button>
          </React.Fragment>
        )
      }}
    </CounterContext.Consumer>
  );
}

export default Counter;
```

Counterコンポーネントはコンテキストを取得し、コンテキストの内容でReact要素を構築する。



## edit: `src/App.tsx`

```tsx
import React from 'react';
import CounterContext, { ICounterContext } from './contexts/counter';
import Counter from './components/Counter';

interface IProps {
}

// ① StateにICounterContextを実装する
interface IState extends ICounterContext {
}

class App extends React.Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    // ②State、Contextに渡すもの
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    }
  }

  increment() {
    this.setState({count:this.state.count + 1});
  }

  decrement() {
    this.setState({count:this.state.count - 1});
  }

  render() {
    // ③Providerのvalueにstateを指定する事で、Provider以下のコンポーネントで受け取れるようになる
    return (
      <CounterContext.Provider value={this.state}>
        <Counter />
      </CounterContext.Provider>
    );
  }
}

export default App;
```

`CounterContext.Provider`の`value`に指定した値が、下階層のコンポーネント内で受け取れるようになる。

