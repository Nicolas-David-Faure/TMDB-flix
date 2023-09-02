import React from 'react'
//router
import { Link, NavLink } from 'react-router-dom'
//redux
import { useSelector } from 'react-redux'
//styles
import './sass/header.scss'
//components
import Nav from './Nav'
import SearchFilms from './SearchFilms'

const Header = () => {
  const { isLoggin } = useSelector(store => store.userSlice)
  
  return (
    <header className='header__main'>

      <Link to={'/browse/movie'}>
        <h1>TMDBFLIX</h1>
      </Link>
      <NavLink
      className={({ isActive, isPending }) =>
      isPending ? "pending header__link" : isActive ? "active header__link" : "header__link"}  
      to={'/browse/movie'} >MOVIES</NavLink>
      <NavLink
      className={({ isActive, isPending }) =>
      isPending ? "pending header__link" : isActive ? "active header__link" : "header__link"}  
      to={'/browse/tv'} >TV</NavLink>
      { isLoggin && <SearchFilms /> }
      <Nav />

    </header>
  )
}

export default Header


                  