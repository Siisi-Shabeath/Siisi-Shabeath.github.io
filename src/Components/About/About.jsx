import React from 'react'
import './About.css'
import ME from '../../Assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='About'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Months Working </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed </small>
            </article>
          </div>

          <p>
            I'm a Fullstack Developer with a passion for creating intuitive, dynamic user experiences. I am interested in both the frontend and backend spectra and like to take on challenging projects.
            Well-organised individual, problem solver, independent freelancer with high attention to detail. 
            Let's get creating.
          </p>

          <a href='#Contact' className='btn btn-primary'>Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About

