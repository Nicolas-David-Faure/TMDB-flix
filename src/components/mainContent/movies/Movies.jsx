import React, { useEffect } from 'react'
//router
import { Route , Routes } from 'react-router-dom'
//axios
import axios from 'axios'
//styles
import './sass/movies.scss'
//context
import { useInfoFilmsContext } from '../../../context/InfoFilmsContext'
//components
import MoviesRecomended from './MoviesRecomended'
import FilmsSearched from './FilmsSearched'
import InfoDescription from './InfoDescription'

const Movies = () => {
  const { filmDescription , setGenres } = useInfoFilmsContext()
  const filmDescriptionIsThere = filmDescription ? true : false;

  useEffect(()=>{

    axios.get('/api/movie/genre')
      .then( ( { data: { genres } } )=> setGenres( genres ) )
      .catch( err => console.error( err ))

  },[])

  return (
    <section className='movies__main'>
      { filmDescriptionIsThere && <InfoDescription film={ filmDescription } /> }

      <Routes>
        <Route path='/browse' element={ <MoviesRecomended /> }/>
        <Route path='/search' element={ <FilmsSearched /> }/>
      </Routes>
    
    </section>
  )
}

export default Movies
