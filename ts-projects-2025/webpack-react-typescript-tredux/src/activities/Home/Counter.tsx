import { dmCounter, umCounter, umsCounter } from '@src/models/counter'
import React, { useEffect } from 'react'

export default function Counter() {
  const {count} = umsCounter(['count'])
  useEffect(() => {
    umCounter(prevState => {
      return {count: prevState.count + 100}
    })
    // updateModelCounter({count: 123})
  }, ['hot'])
  return <div>
    <div>Count: {count}</div>
    <div>
      <button onClick={() => dmCounter('add', 1)}>Add</button>
      <button onClick={() => dmCounter('subtract', 1)}>Subtract</button>
    </div>
  </div>
}