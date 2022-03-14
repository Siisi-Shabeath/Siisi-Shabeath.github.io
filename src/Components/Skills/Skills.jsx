import React from 'react'
import './Skills.css'
import {BiCheck} from 'react-icons/bi'

const Skills = () => {
  return (
    <section id='Skills'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Branding</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Color, typography and layouts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interactivity and animation</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Translating wireframe designs into working code</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating the architecture and content of a site</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building in functionality and responsivity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Making a site go live</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Updating and renovating sites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Troubleshooting, fixing bugs, and glitches</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Skills