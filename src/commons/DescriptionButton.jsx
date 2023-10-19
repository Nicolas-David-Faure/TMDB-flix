import React from 'react'
//redux
import { useDispatch } from 'react-redux'
import { setFilmsDescription } from '../store/slice/infoDescription/infoDescriptionSlice'
//styles
import './sass/descriptionButton.scss'
//icon
import arrowDonwIcon from '../assets/icons/arrowDown.svg'
const DescriptionButton = ( { film } ) => {
  const dispatch = useDispatch()

  return (
    <div className='descriptionButton__main' onClick={()=>dispatch(setFilmsDescription(film))}>{/*set film to a global state context to use on infoDescription.jsx*/}
      <img src={arrowDonwIcon} alt="description" />
    </div>
  )
}

export default DescriptionButton
