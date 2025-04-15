import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { InsaludApp } from './InsaludApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InsaludApp/>
  </StrictMode>,
)
