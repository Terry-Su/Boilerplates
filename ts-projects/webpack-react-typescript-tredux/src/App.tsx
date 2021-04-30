import React from 'react'
import Root from './activities'
import models from './models'
import { initModels } from './utils/tredux'

const EnhancedProvider = initModels(models)

export default function App() {
  return <EnhancedProvider >
    <Root />
  </EnhancedProvider>
}