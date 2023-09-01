import React from 'react'
//router
import { Link } from 'react-router-dom'
//styles
import './sass/header.scss'
//context
import { useAcualizarDatosContext } from '../../context/AcualizarDatosContext'
//components
import Nav from './Nav'
import SearchFilms from './SearchFilms'

const Header = () => {
  const { userIsLogged } = useAcualizarDatosContext()

  return (
    <header className='header__main'>

      <Link to={'/browse'}>
        <h1>TMDBFLIX</h1>
      </Link>

      { userIsLogged && <SearchFilms /> }

      <Nav />

    </header>
  )
}

export default Header
