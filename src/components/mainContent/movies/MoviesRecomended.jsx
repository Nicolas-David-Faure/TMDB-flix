import React from 'react'
import useAxiosGetData from '../../../hooks/useAxiosGetData'

//commons

import Slider from '../../../commons/Slider'
const MoviesRecomended = () => {
  const [data,setData] = useAxiosGetData('/api/movie/all')
  const { results = []} = data ? data : {results: ''}
  return (
    <div>
      {
        data && <Slider films={results}/>
      }
    </div>
  )
}

export default MoviesRecomended
