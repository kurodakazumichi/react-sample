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