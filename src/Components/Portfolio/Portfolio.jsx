import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/portfolio1.png'
import IMG2 from '../../Assets/portfolio2.png'
import IMG3 from '../../Assets/portfolio3.png'
import IMG4 from '../../Assets/portfolio4.png'

const Portfolio = () => {
  return (
    <section id='Portfolio'>
        <h5>My Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>
            <article className='portfolio__item'>
                <div className='portfolio__item.image'>
                    <img src={IMG4} alt='title' />
                </div>
                <h3>Amazon Website Clone</h3>
                <div className="portfolio__item-cta">
                    <a href='https://github.com/Siisi-Shabeath' className='btn' target='_blank'>Github</a>
                </div>  
            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item.image'>
                    <img src={IMG3} alt='title' />
                </div>
                <h3>Colour Guessing Website Game</h3>
                <div className="portfolio__item-cta">
                    <a href='https://github.com/Siisi-Shabeath' className='btn' target='_blank'>Github</a>
                 </div>
            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item.image'>
                    <img src={IMG2} alt='title' />
                </div>
                <h3>Webpage Clone</h3>
                <div className="portfolio__item-cta">
                    <a href='https://github.com/Siisi-Shabeath' className='btn' target='_blank'>Github</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item.image'>
                    <img src={IMG1} alt='title' />
                </div>
                <h3>Webpage Clone</h3>
                <div className="portfolio__item-cta">
                    <a href='https://github.com/Siisi-Shabeath' className='btn' target='_blank'>Github</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Portfolio