import { CounterContainer } from './useCounterUnstated'
import CounterDisplay from './CounterDisplay'

function App() {
  return (
    <CounterContainer.Provider>
      <CounterDisplay />
    </CounterContainer.Provider>
  )
}

export default App
