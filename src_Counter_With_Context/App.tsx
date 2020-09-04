import React from 'react';
import CounterContext, { ICounterContext } from './contexts/counter';
import Counter from './components/Counter';

interface IProps {

}

interface IState extends ICounterContext {
}

class App extends React.Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

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
    return (
      <CounterContext.Provider value={this.state}>
        <Counter />
      </CounterContext.Provider>
    );
  }
}



export default App;
