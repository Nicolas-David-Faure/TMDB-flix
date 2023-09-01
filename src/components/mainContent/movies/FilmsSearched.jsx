import React from 'react'
//context
import { useInfoFilmsContext } from '../../../context/InfoFilmsContext'
import { useAcualizarDatosContext } from '../../../context/AcualizarDatosContext'
//styles
import './sass/filmsSerched.scss'
//commons
import Card from '../../../commons/Card'
import Banner from '../../../commons/Banner'

const FilmsSearched = () => {
  const { userLogged } = useAcualizarDatosContext()
  const { filmsSerched } = useInfoFilmsContext()

  const filmsSerchedAreThere = filmsSerched ? true : false;

  return (
    <div className='filmsSerched__main'>

      { filmsSerchedAreThere && <Banner film={ filmsSerched[0] }/> }

      { 
        filmsSerchedAreThere && filmsSerched.map(( film) =>(
          <Card key={ film.id } film={ film } user={ userLogged }/>
        )) 
      }

    </div>
  )
}

export default FilmsSearched
