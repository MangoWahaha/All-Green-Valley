import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
import App from './App.jsx'
=======
import App from './App.jsx'
import "./styles/index.css"
>>>>>>> 9b4f6004618d26da07b9c70ba46193e6751f35ad

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
