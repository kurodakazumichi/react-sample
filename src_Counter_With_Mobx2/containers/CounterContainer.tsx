import React from 'react';
import Counter from '../components/Counter';
import { inject, observer } from 'mobx-react';
import { IStore } from '../stores/counter';

interface IProps {
  counter?: IStore;
}

const Container:React.FC<IProps> = ({counter}) => {

  if (!counter) {
    throw new Error("counter store is not found.");
  }

  return (
    <Counter 
      count={counter.count.get()}
      increment={counter.increment}
      decrement={counter.decrement}
    />
  );

}

export default inject("counter")(observer(Container));