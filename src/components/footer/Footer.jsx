import React from 'react'
import Footer_divisor1 from './Footer_divisor1'
import Footer_divisor2 from './Footer_divisor2'
import './scss/footer.scss'
const Footer = () => {
  return (
    <footer className='footer__main'>
      <div className='footer__main_divisors'>
        <Footer_divisor2 />
        <Footer_divisor1 />
      </div>
     <div className='footer__main_cont-copyright'> 
       &#169;2023 TMBDFLIX. Todos los derechos reservados.
     </div>
   
    </footer>
  )
}

export default Footer
