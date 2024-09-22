import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
  <h1 className= "font-medium text-[2.8rem] text-white">PASSWORD GENERATOR </h1>

    <App />
    </>

)
