import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { createGlobalStyle } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

const container = document.getElementById('root')!
const root = createRoot(container)
const GlobalStyle = createGlobalStyle`
      div {
        color: snow;
        background-color: rgba(60, 60, 60);
      }
      header {
        background: transparent;
        color: snow;
      }
      nav {
        background-color: rgba(60, 60, 60);
      }
      body {
        background-color: rgba(60, 60, 60);
      }
  `
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <GlobalStyle/>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
