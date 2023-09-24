import React from 'react'
import './sass/playButton.scss'
//icon
import playIcon from '../assets/icons/play.svg'

const PlayButton = ({ film }) => {
  return (
    <div className='playButton__main' onClick={()=>alert('reproduciendo..')}>{/*set film to a global state context to use on infoDescription.jsx*/}
            <img src={playIcon} alt="description" />
    </div>
  )
}

export default PlayButton
