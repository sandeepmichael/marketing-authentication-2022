import React from 'react'

const About = () => {
  return (
    <div>
        <section id='about'>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='/assets/about1.jpg' alt='about1' className='w-75 mt-5'/>
                    </div>
                    <div className='col-md-6 my-3'>
                        <h1>About us</h1>
                        <hr/>
                        <p className='lead'>Market research will tell you if there’s an opportunity to 
                        turn your idea into a successful business. It’s a way to gather 
                        information about potential customers and businesses already operating in your area. Use that information to find a competitive
                         advantage for your business.</p>
                         <button className='btn btn-primary me-2'>Get Started</button>
                         <button className='btn btn-info '>Contact Us</button>
                    </div>

                </div>
            </div>

        </section>
    </div>
  )
}

export default About