import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GuestInput from './GuestInput.jsx';
import Layout from './Layout.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Layout>
            <GuestInput />
        </Layout>
  </StrictMode>,
)
