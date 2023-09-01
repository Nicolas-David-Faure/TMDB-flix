import React from 'react'
//redux
import { useSelector } from 'react-redux'

//styles
import './sass/filmsSerched.scss'
//commons
import Card from '../../../commons/Card'
import Banner from '../../../commons/Banner'

const FilmsSearched = () => {
  const {userLoggin} = useSelector(store=> store.userSlice)
  const {filmsFounded} = useSelector(store=>store.filmsSlice)

  const filmsSerchedAreThere = filmsFounded ? true : false;

  return (
    <div className='filmsSerched__main'>

      { filmsSerchedAreThere && <Banner film={ filmsFounded[0] }/> }

      { 
        filmsSerchedAreThere && filmsFounded.map(( film) =>(
          <Card key={ film.id } film={ film } user={ userLoggin }/>
        )) 
      }

    </div>
  )
}

export default FilmsSearched
