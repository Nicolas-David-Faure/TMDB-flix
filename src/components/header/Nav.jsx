import React from 'react'
//router
import { NavLink } from 'react-router-dom'
import { useAcualizarDatosContext } from '../../context/AcualizarDatosContext'
//axios
import axios from 'axios'
//styles
import './sass/nav.scss'

const Nav = () => {
  const { userLogged , updateLoginUser } =  useAcualizarDatosContext()
  const isLogged = typeof userLogged ==  'object' ? true : false; //is logged?

  const handleLogout=()=>{
    axios.post( '/api/user/logout' , {})

    .then(()=> updateLoginUser() )
    .catch(err=> console.error(err) )
  }

  return (
    <nav className='nav__main'>
      {isLogged ?
          <NavLink 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
            to={'/'}>
              <button onClick={handleLogout}>Cerrar sesión</button>
          </NavLink>

                :

          <>

            <NavLink 
              className={( { isActive, isPending } ) =>
              isPending ? "pending" : isActive ? "active" : ""}
              to={'/auth_panel?type=register'}>
                <button>Registrate</button>
            </NavLink>    
            <NavLink 
              className={( { isActive, isPending } ) =>
              isPending ? "pending" : isActive ? "active" : ""}
              to={'/auth_panel?type=login'}>
                <button>Ingresar</button>
            </NavLink>

          </>
          }
    </nav>
  )
}

export default Nav
