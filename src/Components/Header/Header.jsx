import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../Assets/Me.PNG'
import HeaderSocials from './HeaderSocials'
import 'animate.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 class='animate__animated animate__bounce animate__faster animate__repeat-3'>Jehoshabeath Appiah</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className='me'>
          <img src={ME} alt='me' />
          </div>

          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header