import React from 'react'
import {useInfoFilmsContext }from '../../../context/InfoFilmsContext'
import Card from '../../../commons/Card'

import './sass/filmsSerched.scss'
import Banner from '../../../commons/Banner'
import { useAcualizarDatosContext } from '../../../context/AcualizarDatosContext'
const FilmsSearched = () => {
  const {userLogged} = useAcualizarDatosContext()
  const {filmsSerched} = useInfoFilmsContext()

  return (
    <div className='filmsSerched__main'>
      {filmsSerched && <Banner film={filmsSerched[0]}/>}
      {filmsSerched && 
     
      filmsSerched.map((film)=>(
        <Card key={film.id} film={film} user={userLogged}/>
      ))}
    </div>
  )
}

export default FilmsSearched
