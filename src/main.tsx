import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Navbar></Navbar>
   <h2>Banner section</h2>
  </StrictMode>,
)
