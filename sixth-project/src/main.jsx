import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App1 from './App1.jsx'
import App2 from './App2.jsx'
import UseMemo from './UseMemo.jsx'
import UseMemo1 from './UseMemo1.jsx'
import UseMemo2 from './UseMemo2.jsx'
import UseCallback from './UseCallback.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseCallback />
  </StrictMode>,
)
