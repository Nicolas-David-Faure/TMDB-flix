import React, { useEffect, useState } from 'react'
//axios
import axios from 'axios'
//styles
import './sass/moviesRecomended.scss'
//commons
import Slider from '../../../commons/Slider'
import Banner from '../../../commons/Banner'
import { useLocation } from 'react-router-dom'

const FilmsRecomended = ( { type = 'movie' } ) => {

  const [data,setData] = useState(null)
  const { results  : films = []} = data ? data : {results: ''}
  const [randomFIlm, setRandomFilm] = useState(null)
  
 
  useEffect(()=>{
    setRandomFilm(Math.ceil(Math.random() * 20))
  
    axios.get(`/api/${type}/all/${randomFIlm}`)
            .then(response => setData(response.data))
            .catch(err => {
              const status = err.response?.status
              setData(status)
            });      
  },[type])

  return (
    <div className='moviesRecomended__main'>

      <Banner film={films[randomFIlm]}/>
      {data && <Slider films={films}/>}
    </div>
  )
}

export default FilmsRecomended
