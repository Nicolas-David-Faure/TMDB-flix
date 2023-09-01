import React from 'react'
//router
import { Link } from 'react-router-dom'
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

      <Link to={'/browse'}>
        <h1>TMDBFLIX</h1>
      </Link>

      { isLoggin && <SearchFilms /> }

      <Nav />

    </header>
  )
}

export default Header
