import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <ToastContainer />
 <RouterProvider router={routes} />
 </React.StrictMode>
)
