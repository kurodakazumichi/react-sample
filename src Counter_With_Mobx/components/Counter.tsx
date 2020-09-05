import React from 'react';
import { inject, observer } from 'mobx-react';
import { IStore } from '../stores/counter';

interface IProps {
  counter?: IStore
}

const Counter:React.FC<IProps> = ({counter}) => {
  
  if (!counter) {
    throw new Error("props.counter is not found.");
  }

  return (
    <React.Fragment>
      <div>count: {counter.count.get()}</div>
      <button onClick={counter.increment}>+1</button>
      <button onClick={counter.decrement}>-1</button>
    </React.Fragment>
  );
}

export default inject("counter")(observer(Counter));