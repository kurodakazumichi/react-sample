import React from 'react';
import { inject, observer } from 'mobx-react';
import { IStore } from '../stores/counter';

interface IProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Counter:React.FC<IProps> = ({count, increment, decrement}) => {
  
  return (
    <React.Fragment>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </React.Fragment>
  );
}

export default Counter;