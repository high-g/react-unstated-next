import { createContext } from 'react'
import { useCounter } from './useCounter'
import CounterDisplay from './CounterDisplay'
import './App.css'

export const CounterContext = createContext()

function App() {
  const counter = useCounter()
  return (
    <CounterContext.Provider value={counter}>
      <div className="App">
        <CounterDisplay />
      </div>
    </CounterContext.Provider>
  )
}

export default App
