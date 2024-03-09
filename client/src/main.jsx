import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import { Navbar } from './components/Navbar'

import { App } from './App'
import { AuthProvider } from './store/auth'
import { ToastContainer} from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
   <App/>
   <ToastContainer />
  </React.StrictMode>
  </AuthProvider>
)
