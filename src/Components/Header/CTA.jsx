import React from 'react'
import CV from '../../Assets/TechCV.docx.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#Contact' className='btn btn-primary'>Get in Touch</a>
    </div>
  )
}

export default CTA