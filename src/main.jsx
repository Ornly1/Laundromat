import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// import machine provider
import MachineContextsProvider from './contexts/MachineContexts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MachineContextsProvider>
    <App />
  </MachineContextsProvider>,
)
