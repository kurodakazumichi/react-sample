import React from 'react';
import Counter from './components/Counter';
import { Provider } from 'mobx-react';
import createCounterStore from './stores/counter';

const App:React.FC = () => {

  const counterStore = createCounterStore();

  const stores = {
    counter: counterStore
  };

  return (
    <Provider {...stores}>
      <Counter />
    </Provider>
  );
}

export default App;
