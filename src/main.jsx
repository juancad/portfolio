import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App'
import './index.css'
import { ThemeProvider as NextThemesProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <App />
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>,
)