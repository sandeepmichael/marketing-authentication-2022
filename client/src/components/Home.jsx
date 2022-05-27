import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Services from './Services'

const Home = () => {
  return (
    <div>
        <section id='home'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 mt-5'>
                        <h1 className='display-1 fw-bolder mt-4 text-center'>Smart Business</h1>
                        <p className='lead text-center fs-4 '>Starting a business for the first time and worried about failure? 
                        Give your new enterprise the best chance of success with these top business tips,
                         the best advice I've collated from other entrepreneurs and developed from my own 
                         experience of more than 20 years of having "been there and done that"
                         as a small business person.</p>
                         <div className='buttons d-flex justify-content-center'>
                             <button className='btn btn-info me-2'> Get Quote</button>
                             <Link to='/services'><button className='btn btn-info'>Services</button></Link>

                         </div>

                    </div>
                </div>

            </div>

        </section>
        <About />
        <Services />
        <Contact />
    </div>
  )
}

export default Home