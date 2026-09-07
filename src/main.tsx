import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Navbar></Navbar>
   <Banner></Banner>
   <h2>Banner section</h2>
  </StrictMode>,
)
