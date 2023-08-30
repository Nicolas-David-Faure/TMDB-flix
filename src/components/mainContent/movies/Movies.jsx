import React from 'react'
//router
import { Route , Routes } from 'react-router-dom'
//axios
import useAxiosGetData  from '../../../hooks/useAxiosGetData'
//styles
import './sass/movies.scss'

//context
import { useInfoFilmsContext } from '../../../context/InfoFilmsContext'
import MoviesRecomended from './MoviesRecomended'
import FilmsSearched from './FilmsSearched'
import InfoDescription from './InfoDescription'


const Movies = () => {
  const { filmsSerched, setFilmsSerched , filmDescription} = useInfoFilmsContext()
  

  
  return (
    <section className='movies__main'>
      {filmDescription && <InfoDescription film={filmDescription} />}
    <Routes>
      <Route path='/browse' element={<MoviesRecomended />} />
      <Route path='/search' element={<FilmsSearched />} />
    </Routes>
      
    </section>
  )
}

export default Movies
