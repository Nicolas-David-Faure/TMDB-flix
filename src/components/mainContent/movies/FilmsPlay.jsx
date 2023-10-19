import React from 'react'
//router
import { useLocation } from 'react-router-dom'
//react player
import ReactPlayer from 'react-player/youtube'
//styles
import './sass/filmsPlay.scss'

const FilmsPlay = ( ) => {
  const location = useLocation().pathname
  const filmKey = location.split('/').at(-1)

  return (
    <section className='filmsPlay__main'>
      {
        filmKey &&
      <ReactPlayer url={`https://www.youtube.com/watch?v=${filmKey}`} />
      }
    </section>
  )
}

export default FilmsPlay
