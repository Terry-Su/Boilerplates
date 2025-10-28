import React from 'react'
import Root from './activities'
import EnhancedProvider from './EnhancedProvider'

export default function App() {
  return <EnhancedProvider >
    <Root />
  </EnhancedProvider>
}