import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {GitHubApp} from './GitHubApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GitHubApp />
  </StrictMode>,
)
