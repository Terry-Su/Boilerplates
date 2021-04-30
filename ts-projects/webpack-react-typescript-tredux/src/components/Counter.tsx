import { dispatchModelCounter, getModelCounterState, updateModelCounter, useModelCounterState } from '@src/models/counter'
import React, { useEffect } from 'react'

export default function Counter() {
  const {count} = useModelCounterState(['count'])
  useEffect(() => {
    updateModelCounter(prevState => {
      return {count: prevState.count + 100}
    })
    // updateModelCounter({count: 123})
  }, [])
  return <div>
    <div>Count: {count}</div>
    <div>
      <button onClick={() => dispatchModelCounter('add', 1)}>Add</button>
      <button onClick={() => dispatchModelCounter('subtract', 1)}>Subtract</button>
    </div>
  </div>
}