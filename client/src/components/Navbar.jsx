import React from 'react'
import { Link} from 'react-router-dom'




const Navbar = ({auth}) => {

 
 
  return (
    <div> 
     
       
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
       
        <Link className="nav-link" to="/">Home</Link>
        
        </li>
        <li className="nav-item">
     
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        </ul>

      {auth ? 
      <>
        <Link to='/login'><button type="button" className="btn btn-outline-primary m-2">
      <i className='fa fa-sign-in me-2'></i>Login</button></Link> 
    <Link to='/register'><button type="button" className="btn btn-outline-primary m-2">
          <i className='fa fa-user-plus me-2'></i>Register</button></Link>
          </>
            :
            <>
          <Link to='/dashboard'><button type="button" className="btn btn-outline-primary m-2">
          <i className='fa fa-user-plus me-2'></i>Dashboard</button></Link>
           <Link to='/logout'><button type="button" className="btn btn-outline-primary m-2">
          <i className='fa fa-sign-out me-2'></i>Logout</button></Link>
          </>
          }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar