import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/Home.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [{ path: '/', element: <Home /> }] },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)