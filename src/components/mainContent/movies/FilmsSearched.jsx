import React from 'react'
import {useInfoFilmsContext }from '../../../context/InfoFilmsContext'
import Card from '../../../commons/Card'

import './sass/filmsSerched.scss'
import Banner from '../../../commons/Banner'
const FilmsSearched = () => {

  const {filmsSerched} = useInfoFilmsContext()

  return (
    <div className='filmsSerched__main'>
      {filmsSerched && <Banner film={filmsSerched[0]}/>}
      {filmsSerched && 
     
      filmsSerched.map((film)=>(
        <Card key={film.id} film={film}/>
      ))}
    </div>
  )
}

export default FilmsSearched
