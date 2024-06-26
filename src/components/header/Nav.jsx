import React, { useEffect, useState } from 'react'
//famer-motion
import { motion } from 'framer-motion'
//router
import { Link , NavLink } from 'react-router-dom'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { togglePersonalAside } from '../../store/slice/favoritesSlice'
import { setUserInfo , setShowList , setAnimateList} from '../../store/slice/userSlice/userSlice'
//axios
import axios from 'axios'
//styles
import './sass/nav.scss'
//icons
import userIcon from '../../assets/icons/user.svg'

const Nav = () => {
  const { isLoggin , userInfo , showList , animateList} = useSelector(store => store.userSlice)

  const dispatch = useDispatch()
  const handleSetShowList =(e)=> {
    dispatch(setAnimateList())

    if(showList){
      setTimeout(()=>{
        dispatch(setShowList(false))
      }, 200)
    }
    else{
      dispatch(setShowList(true))
    }
  }

  return (
    <nav onClick={(e)=>e.stopPropagation()} className='nav__main'>
      {isLoggin ?

          <div className='nav__user'>
              <img onClick={handleSetShowList} src={ userIcon } alt='user-icon' />
             {showList && <UserOptions isLoggin={isLoggin} animateList={animateList} setShowList={ handleSetShowList }/>}
          </div>
                :
          <>
            <NavLink 
              className={( { isActive, isPending } ) =>
              isPending ? "pendingNav" : isActive ? "activeNav" : ""}
              to={'/auth_panel?type=register'}>
                <button className='nav__btn'>Registrate</button>
            </NavLink>    
            <NavLink 
              className={( { isActive, isPending } ) =>
              isPending ? "pendingNav" : isActive ? "activeNav" : ""}
              to={'/auth_panel?type=login'}>
                <button className='nav__btn'>Ingresar</button>
            </NavLink>

          </>
          }
    </nav>
  )
}

const UserOptions = ({ animateList , setShowList , isLoggin})=>{
  const dispatch = useDispatch()

  const handleLogout=()=>{
    axios.post( '/api/user/logout' , {})
    .then(()=> dispatch(setUserInfo(401)) )
    .catch(err=> console.error(err) )
    .finally(()=>setShowList())
    
  }

  const handleTogglePersonalAside = ()=>{
    dispatch(togglePersonalAside())
    setShowList()
  }

  const handleAnimate = {
    on: {y: 0 , opacity: 1},
    off: { y:-200 ,  opacity : 0}
  }

  return(
    <motion.div
    initial={'off'}
    animate={animateList ? 'on' : 'off'}
    variants={handleAnimate}
    className='userOptions__main'>
      <ul>
        <li onClick={handleTogglePersonalAside} >Ver favoritos</li>
        <li>
          <Link
          onClick={()=>setShowList(false)} 
          to={'/users'}  >
            Buscar Usuarios
          </Link>
        </li>
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
    </motion.div>
    
  )
}

export default Nav
