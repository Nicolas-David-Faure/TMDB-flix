import React from 'react'
//styles
import './sass/slider.scss'
//commons
import Card from './Card'

const Slider = ( { films } ) => {
  
  
  return (

    <div className='slider__main'>

      {
        films?.map((film)=>(
          <Card  film={film} key={film.id}/>
        ))
      }

    </div>
  )
}

export default Slider
