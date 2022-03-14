import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_03lnj8f', 'template_ie67upe', form.current, 'N_05VMnI_0fouptWj')
      
    e.target.reset()
  };

  return (
    <section id='Contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h3>Email</h3>
            <h4>sshabeath@gmail.com</h4>
            <a href='mailto:sshabeath@gmail.com' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit ={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact