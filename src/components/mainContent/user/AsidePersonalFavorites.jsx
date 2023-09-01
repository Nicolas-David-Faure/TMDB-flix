import React, { useEffect } from 'react'
//redux
import { useSelector , useDispatch} from 'react-redux'
import { togglePersonalAside } from '../../../store/slice/favoritesSlice'
//styles
import './scss/asidePersonalFavorites.scss'
//axios
import axios from 'axios'

const AsidePersonalFavorites = () => {
  const { personalAside } = useSelector(store => store.favoritesSlice)
  const dispatch = useDispatch()
  console.log(personalAside)

  const handleClosePersonalAside = (e) =>{
    dispatch(togglePersonalAside())
    document.body.style.overflow = 'auto';


  }
  
  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    // axios.get(`/api/favorites/${user?.email}`)
    //  .then(({data:arrFavorites})=>{setFavorites(arrFavorites)})
    //  .catch(err=>err)
    //  .finally(()=>{
    //  })
  },[])
  return (
    <div onClick={handleClosePersonalAside} className='asidePersonalFavorites__main'>
      <aside onClick={(e)=>e.stopPropagation()}>
        
      </aside>
    </div>
  )
}

export default AsidePersonalFavorites
