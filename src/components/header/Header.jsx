import React from 'react'
//router
import { Link } from 'react-router-dom'
//styles
import './sass/header.scss'
//components
import Nav from './Nav'
import SearchFilms from './SearchFilms'

const Header = () => {


  return (
    <header className='header__main'>
      <Link to={'/'}>
          <h1>TMDBFLIX</h1>
      </Link>

      <SearchFilms /> 
      <Nav />
    </header>
  )
}

export default Header
