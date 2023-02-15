import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import React from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: <Home/>
  }
])
