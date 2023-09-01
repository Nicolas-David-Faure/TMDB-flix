import React from 'react'
//context
import { useAcualizarDatosContext } from '../context/AcualizarDatosContext'
//styles
import './sass/slider.scss'
//commons
import Card from './Card'

const Slider = ( { films } ) => {
  const {userLogged} = useAcualizarDatosContext()
  
  return (

    <div className='slider__main'>

      {
        films?.map((film)=>(
          <Card user={userLogged} film={film} key={film.id}/>
        ))
      }

    </div>
  )
}

export default Slider
