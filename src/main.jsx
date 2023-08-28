import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './main/App.jsx'
import './index.scss'

import { BrowserRouter } from "react-router-dom";

import { AcualizarDatosContextProvider } from './context/AcualizarDatosContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AcualizarDatosContextProvider>
        <App />
      </AcualizarDatosContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
