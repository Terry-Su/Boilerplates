import { dispatchModelCounter, getModelCounterState, updateModelCounter, useModelCounterState } from '@src/models/counter'
import React, { useEffect } from 'react'

export default function Counter() {
  const {count} = useModelCounterState(['count'])
  useEffect(() => {
    updateModelCounter({count: 0})
    console.log('before', getModelCounterState())
    updateModelCounter(prevState => {
      return {count: prevState.count + 100}
    })
    console.log('after', getModelCounterState())
  }, ['hot'])
  return <div>
    <div>Count: {count}</div>
    <div>
      <button onClick={() => dispatchModelCounter('add', 1)}>加1</button>
      <button onClick={() => dispatchModelCounter('delayAdd', 1000, 1)}>等待一秒加1</button>
      <button onClick={() => dispatchModelCounter('subtract', 1)}>减1</button>
    </div>
  </div>
}