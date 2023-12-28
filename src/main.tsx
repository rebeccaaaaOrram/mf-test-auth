import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './contexts/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App
        onLogin={function (username: string, password: string): void {
          throw new Error('Function not implemented.')
        }}
        logoSrc={''}
      />
    </AuthProvider>
  </React.StrictMode>
)
