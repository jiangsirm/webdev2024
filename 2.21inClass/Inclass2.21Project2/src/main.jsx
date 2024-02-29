import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import Practice from './Practice.jsx'
import NumberStateProvider from './Practice2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <NumberStateProvider>
      <Home/> 
    </NumberStateProvider>
  </React.StrictMode>,
)
