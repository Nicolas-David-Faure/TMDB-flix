import React, { useState } from 'react'
//router
import { NavLink } from 'react-router-dom'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { togglePersonalAside } from '../../store/slice/favoritesSlice'
import { setUserInfo } from '../../store/slice/userSlice/userSlice'
//axios
import axios from 'axios'
//styles
import './sass/nav.scss'
//icons
import userIcon from '../../assets/icons/user.svg'


const Nav = () => {
  const { isLoggin , userInfo } = useSelector(store => store.userSlice)
  const [showList, setShowList] = useState(false)

  return (
    <nav className='nav__main'>
      {isLoggin ?

          <div className='nav__user'>
              <img onClick={ ()=>setShowList( ( prev )=> !prev ) } src={ userIcon } alt='user-icon' />
             {showList && <UserOptions setShowList={ setShowList }/>}
          </div>
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

const UserOptions = ({ setShowList })=>{
  const dispatch = useDispatch()

  const handleLogout=()=>{
    axios.post( '/api/user/logout' , {})
    .then(()=> dispatch(setUserInfo(401)) )
    .catch(err=> console.error(err) )
  }

  const handleTogglePersonalAside = ()=>{
    dispatch(togglePersonalAside())
    setShowList(false)
  }
  return(
    <div className='userOptions__main'>
      <ul>
        <li onClick={handleTogglePersonalAside} >Ver favoritos</li>
        <li>Buscar usuarios</li>
        <li>Recomendados</li>
        <li> 
          <NavLink 
                  className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}
                  to={'/'} onClick={handleLogout} >
                   Cerrar sesión
                </NavLink>
            </li>
      
         
      </ul>
    </div>
    
  )
}

export default Nav
