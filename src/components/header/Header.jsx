import React from 'react'
//router
import { Link, NavLink, useLocation } from 'react-router-dom'
//redux
import { useSelector } from 'react-redux'
//styles
import './sass/header.scss'
//components
import Nav from './Nav'
import SearchFilms from './SearchFilms'

const Header = () => {
  const { isLoggin } = useSelector(store => store.userSlice)
  const location = useLocation()
  let actualLocation = location.pathname.split('/').at(-1)
  
  return (
    <header className='header__main'>

      <Link className='header__link_h1' to={'/browse/movie'}>
        <h1>TMDBFLIX</h1>
      </Link>
      {(isLoggin && actualLocation !== 'users') &&
      <>
          <NavLink
          className={({ isActive, isPending }) =>
          isPending ? "pending header__link" : isActive ? "active header__link" : "header__link"}  
          to={'/browse/movie'} >MOVIES</NavLink>
          <NavLink
          className={({ isActive, isPending }) =>
          isPending ? "pending header__link" : isActive ? "active header__link" : "header__link"}  
          to={'/browse/tv'} >TV</NavLink>
          <SearchFilms /> 
      </>
      }
      <Nav />

    </header>
  )
}

export default Header


                  