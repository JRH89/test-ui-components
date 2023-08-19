import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <div style={{ userSelect: "none" }}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
