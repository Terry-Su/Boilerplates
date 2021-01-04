import { dispatchModelCounter, getModelCounterState, updateModelCounter, useModelCounterState } from '@src/config/model'
import React from 'react'

export default function Counter() {
  const { count } = useModelCounterState(['count'])
  return <div>
    <div>Count: {count}</div>
    <div>
      <button onClick={() => dispatchModelCounter('add')}>Add</button>
      <button onClick={() => dispatchModelCounter('subtract')}>subtract</button>
    </div>
  </div>
}