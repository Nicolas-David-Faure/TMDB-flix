import React from 'react'
import {useInfoFilmsContext }from '../../../context/InfoFilmsContext'
import Card from '../../../commons/Card'

import './sass/filmsSerched.scss'
const FilmsSearched = () => {

  const {filmsSerched} = useInfoFilmsContext()

  return (
    <div className='filmsSerched__main'>
      {filmsSerched && 
      filmsSerched.map((film)=>(
        <Card film={film}/>
      ))}
    </div>
  )
}

export default FilmsSearched
