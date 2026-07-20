import React from 'react'
import ReactDOM from 'react-dom/client'
import AboutApp from './AboutApp'
import '../globals.css'

document.body.addEventListener('touchmove', (e) => {
  e.preventDefault()
}, { passive: false })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AboutApp />
  </React.StrictMode>,
)
