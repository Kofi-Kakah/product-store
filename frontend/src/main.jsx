import { Provider } from  "./components/ui/provider"; 
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import Layout from "./Layout.jsx";

// Error Boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', fontFamily: 'monospace' }}>
          <h1>Something went wrong</h1>
          <pre style={{ color: 'red', overflow: 'auto' }}>
            {this.state.error?.toString()}
          </pre>
        </div>
      )
    }

    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <ErrorBoundary>
          <Provider>
              <App />
              <Toaster />
          </Provider>
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)

 




 


