import React from 'react'
import Counter from './activities/Counter'
import models from './models'
import { initModels } from './utils/tredux'

const EnhancedProvider = initModels(models)

export default function App() {
  return <EnhancedProvider >
    <Counter />
  </EnhancedProvider>
}