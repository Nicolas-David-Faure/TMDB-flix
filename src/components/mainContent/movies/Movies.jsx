import React, { useEffect } from 'react'
//router
import { Route , Routes, useLocation } from 'react-router-dom'
//axios
import axios from 'axios'
//styles
import './sass/movies.scss'
//redux
import { useSelector , useDispatch } from 'react-redux'
import {  setFilmGenres} from '../../../store/slice/infoDescription/infoDescriptionSlice'
//components
import FilmsSearched from './FilmsSearched'
import InfoDescription from './InfoDescription'
import FilmsRecomended from './FilmsRecomended'
import SearchUsers from '../user/searchUsers/SearchUsers'


const Movies = () => {
  const {pathname} = useLocation();
  let type = pathname.split('/').at(-1)

  const { filmGenres  , filmDescription} = useSelector(store=> store.infoDescriptionSlice)
  const filmDescriptionIsThere = filmDescription ? true : false;
  const dispatch = useDispatch()

  
  useEffect(()=>{
    axios.get('/api/movie/genre')
      .then( ( { data: { genres } } )=> dispatch(setFilmGenres( genres )) )
      .catch( err => console.error( err ))

  },[])

  return (
    <section className='movies__main'>
      { filmDescriptionIsThere && <InfoDescription film={ filmDescription } /> }

      <Routes>
        <Route path={`/browse/movie`} element={ <FilmsRecomended /> }/>
        <Route path={`/browse/tv`} element={ <FilmsRecomended type='tv' /> }/>
        <Route path={`/search/${type}`} element={ <FilmsSearched /> }/>
        <Route path='/users' element={<SearchUsers />} />
      </Routes>
    
    </section>
  )
}

export default Movies
