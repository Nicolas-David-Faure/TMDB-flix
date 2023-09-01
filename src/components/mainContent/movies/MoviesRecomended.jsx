import React, { useEffect, useState } from 'react'
//hook
import useAxiosGetData from '../../../hooks/useAxiosGetData'
//styles
import './sass/moviesRecomended.scss'
//commons
import Slider from '../../../commons/Slider'
import Banner from '../../../commons/Banner'

const MoviesRecomended = () => {
  const [data,setData] = useAxiosGetData('/api/movie/all')
  const { results  : films = []} = data ? data : {results: ''}
  const [randomFIlm, setRandomFilm] = useState(null)
  
  useEffect(()=>{
    setRandomFilm(Math.ceil(Math.random() * 20))
  },[])

  return (
    <div className='moviesRecomended__main'>

      <Banner film={films[randomFIlm]}/>
      {data && <Slider films={films}/>}
    </div>
  )
}

export default MoviesRecomended
