import { useContext } from 'react'
import { CounterContext } from './App'

const CounterDisplay = () => {
  const counter = useContext(CounterContext)
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  )
}

export default CounterDisplay
