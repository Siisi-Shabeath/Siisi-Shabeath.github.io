import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Jehoshabeath</a>

      <ul className='permalinks'>
        
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#Skills'>Skills</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://instagram.com/siisi_shabeath' target='_blank'><BsInstagram /></a>
        <a href='https://twitter.com/Siisi_Shabeath' target='_blank'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jehoshabeath Appiah. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer