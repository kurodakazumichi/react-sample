import { observable, action, IObservableValue } from 'mobx';



const createStore = () => {
  const store = {
    count: observable.box(0),
    increment: action(() => { store.count.set(store.count.get() + 1); }),
    decrement: action(() => { store.count.set(store.count.get() - 1); }),
  }

  store.count.observe((change) => {
    console.log(`${change.oldValue} -> ${change.newValue}`);
  });

  return store;
}

export type IStore = ReturnType<typeof createStore>;
export default createStore;