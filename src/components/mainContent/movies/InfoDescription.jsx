import React, { useEffect } from 'react'
//style
import './sass/infoDescription.scss'
//context
import { useInfoFilmsContext } from '../../../context/InfoFilmsContext'
//commons
import Banner from '../../../commons/Banner'
//icons
import xIcon from '../../../assets/icons/x.svg'
const InfoDescription = ({ film }) => {
  const {filmDescription, setFilmDescription} = useInfoFilmsContext()


  const handleCloseInfoDescription =()=>{
    setFilmDescription(null)
    document.body.style.overflow = 'auto';
  }

  useEffect(()=>{
    document.body.style.overflow = 'hidden';
  },[])
  

  return (
    <span 
      className='info__main'>
      
      <article>

        <img className='info__main_btn-close' onClick={handleCloseInfoDescription} src={xIcon} alt="close" />
        <Banner activeBtnInfo={false} film={film}/>
      </article>


    </span>
  )
}

export default InfoDescription
