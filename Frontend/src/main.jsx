import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Authprovider from './context/Authprovider.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Authprovider>
    <div className='dark:bg-slate-900 dark:text-white'>
      <App />
    </div>
    </Authprovider>

  </BrowserRouter>

)
