import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {RouterProvider} from "react-router-dom"
import {element} from "./routes/Routes"
// import { Router } from 'express'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={element} />
    {/* <App /> */}
  </React.StrictMode>,
)
