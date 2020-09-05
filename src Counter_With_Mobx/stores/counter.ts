import { observable, action, IObservableValue } from 'mobx';

export interface IStore {
  count: IObservableValue<number>;
  increment: () => void;
  decrement: () => void;
}

const createStore = () => {
  const store:IStore = {
    count: observable.box(0),
    increment: action(() => { store.count.set(store.count.get() + 1); }),
    decrement: action(() => { store.count.set(store.count.get() - 1); }),
  }

  store.count.observe((change) => {
    console.log(`${change.oldValue} -> ${change.newValue}`);
  });

  return store;
}

export default createStore;