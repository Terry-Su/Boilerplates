import { Counter } from './components/Counter'
import './App.css'
import { useCallback, useEffect } from 'react'
import { addWindowOnResizeFn, removeWindowOnResizeFn } from './events/window'

function App() {
  const cb = useCallback(() => {
    console.log("hello")
  }, [])
  useEffect(() => {
    addWindowOnResizeFn(cb)
    return () => {
      removeWindowOnResizeFn(cb)
    }
  }, [])
  return (
    <div className="app">
      <Counter />
    </div>
  )
}

export default App
