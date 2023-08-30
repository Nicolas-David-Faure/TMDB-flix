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


const Movies = () => {
  const { filmsSerched, setFilmsSerched } = useInfoFilmsContext()
  

  
  return (
    <section className='movies__main'>
    <Routes>
      <Route path='/browse' element={<MoviesRecomended />} />
      <Route path='/search' element={<FilmsSearched />} />
    </Routes>
      
    </section>
  )
}

export default Movies
