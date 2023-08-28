import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import './sass/header.scss'

const Header = () => {


  return (
    <header className='header__main'>
      <Link to={'/'}>
          <h1>TMDBFLIX</h1>
      </Link>
      <Nav />
    </header>
  )
}

export default Header
