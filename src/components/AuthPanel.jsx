import React from 'react'
import { Route , Routes, useLocation } from 'react-router-dom'
import './sass/authPanel.scss'
import Register from '../commons/Register'
import Login from '../commons/Login'
const AuthPanel = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');
  
  let componentToRender = null;

  if (type === 'register') {
    componentToRender = <Register />;
  } else if (type === 'login') {
    componentToRender = <Login />;
  }

  return (
    <section className='authPanel__main'>
      {componentToRender}
    </section>
  )
}

export default AuthPanel
