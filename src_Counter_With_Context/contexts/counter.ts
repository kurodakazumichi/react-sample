import { createContext } from 'react';

// Contextの方を定義
export interface ICounterContext {
  count: number,
  increment: () => void,
  decrement: () => void,
}

// Contextを作成
const CounterContext = createContext<ICounterContext|null>(null);
export default CounterContext;