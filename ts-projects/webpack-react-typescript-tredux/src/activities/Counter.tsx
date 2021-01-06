import { dispatchModelCounter, getModelCounterState, updateModelCounter, useModelCounterState } from '@src/config/model'
import React, { useEffect } from 'react'

export default function Counter() {
  const {count} = useModelCounterState(['count'])
  useEffect(() => {
    updateModelCounter({ count })
  }, [])
  return <div>
    <div>Count: {count}</div>
    <div>
      <button onClick={() => dispatchModelCounter('add', 1)}>Add</button>
      <button onClick={() => dispatchModelCounter('subtract', 1)}>subtract</button>
    </div>
  </div>
}