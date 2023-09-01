import React from 'react'
import ReactDOM from 'react-dom/client'
//router
import { BrowserRouter } from "react-router-dom";
//redux
import { Provider } from 'react-redux';
import { store } from './store/store.js';
//styles
import './index.scss'
//app
import App from './App.jsx'

//Todo: Pasar todos los estados globales a redux //pending

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
              <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
