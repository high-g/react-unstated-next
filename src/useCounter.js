import { useState, useCallback } from 'react'

export const useCounter = (initialState = 0) => {
  const [count, setCount] = useState(initialState)
  const decrement = useCallback(() => setCount((prevCount) => prevCount - 1), [])
  const increment = useCallback(() => setCount((prevCount) => prevCount + 1), [])
  return { count, decrement, increment }
}
