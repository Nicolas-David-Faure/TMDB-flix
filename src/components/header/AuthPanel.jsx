import React from 'react'
//router
import { useLocation } from 'react-router-dom'
//styles
import './sass/authPanel.scss'
//commons
import Register from '../../commons/Register'
import Login from '../../commons/Login'

const AuthPanel = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); //search for params
  const type = searchParams.get('type'); //get the param 'type'
  
  let componentToRender = null;

  if ( type === 'register' ) {          //compare to render one component
    componentToRender = <Register />;
  } else if ( type === 'login' ) {
    componentToRender = <Login />;
  }

  return (
    <section className='authPanel__main'>
      { componentToRender }
    </section>
  )
}

export default AuthPanel
