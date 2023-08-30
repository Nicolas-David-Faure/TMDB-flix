import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { BrowserRouter } from "react-router-dom";

import { AcualizarDatosContextProvider } from './context/AcualizarDatosContext.jsx';
import { InfoFilmsContextProvider } from './context/InfoFilmsContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <AcualizarDatosContextProvider>
          <InfoFilmsContextProvider>
            <App />
          </InfoFilmsContextProvider>
        </AcualizarDatosContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
