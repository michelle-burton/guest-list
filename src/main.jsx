import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GuestInput from './GuestInput.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <GuestInput />
  </StrictMode>,
)
