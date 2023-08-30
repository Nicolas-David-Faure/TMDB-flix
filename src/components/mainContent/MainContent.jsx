import React from 'react'
//context
import { useAcualizarDatosContext } from '../../context/AcualizarDatosContext'
//styles
import './sass/mainContent.scss'
//components
import Start  from './Start'
import Movies from './movies/Movies'
const MainContent = () => {
  const { userLogged } = useAcualizarDatosContext()
  
  let userIsLogged = typeof userLogged === 'object' ? true : false;

  return (
    <main className='mainContent__main'>
      {userIsLogged ? <Movies />: <Start /> }
    </main>
  )
}

export default MainContent