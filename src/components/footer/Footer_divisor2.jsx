import React from 'react'

//styles
import './scss/footer.scss'
//icons

import iconGitHub from '../../assets/icons/github.svg'
import iconInstagram from '../../assets/icons/instagram.svg'
import iconLinkedIn from '../../assets/icons/linkdin.svg'
const Footer_divisor2 = () => {
  return (
    <div className='footer__main_divisor footer__main_divisor-2'>
        <div className='footer__divisor-2 footer_address'>
            <p>Creado por: Nicolás David Faure</p>
            <p>Argentina - Chaco - Las Breñas</p>
            <p>Correo electrónico: nicolas.david.faure@gmail.com</p>
        </div>

        <hr />

        <div className='footer__divisor-2 footer_schedules'>
            <p>Desarrollador FullStack</p>
            <p>Tech utilizadas:</p>
            <p>Front-End: React.js | React-router | Axios | Redux | Sass | Framer-motion</p>
            <p>Back-End: Node.js | Express | Json-Web-Token | Sequelize | Bccrypt | PostgreSQL</p>
        </div>

          <hr />

        <div className='footer__divisor-2 footer_social-media'>

            <a href="https://www.linkedin.com/in/nicol%C3%A1s-david-faure-b023ba240/" target="_blank" rel="noopener noreferrer">
              <img src={iconLinkedIn} alt="icon of LinkIN" />
            </a>

            <a href="https://github.com/Nicolas-David-Faure" target="_blank" rel="noopener noreferrer">
              <img src={iconGitHub} alt="icon of GitHub" />
            </a>

            <a href="https://www.instagram.com/nicolasfaure1/" target="_blank" rel="noopener noreferrer">
              <img src={iconInstagram} alt="icon of instagram" />
            </a>
        </div>
    </div>
  )
}

export default Footer_divisor2
