import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  typography: {
    fontFamily: "'Share Tech Mono', monospace",
    h4: {
      fontFamily: "'Share Tech Mono', monospace",
    },
    subtitle1: {
      fontFamily: "'Share Tech Mono', monospace",
    },
    body2: {
      fontFamily: "'Share Tech Mono', monospace",
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
