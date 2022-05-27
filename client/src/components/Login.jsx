import React, {useState} from 'react'
import { NavLink, useHistory  } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


const Login = () => {
  const history = useHistory()

  const [formData, SetformData] = useState({
    email:'',
    password:''
  })
  const {email, password} = formData;

 

const handleChange = (e) => {
  SetformData({...formData, [e.target.id]: e.target.value})
}

const submitHandler = async(e) => {
  e.preventDefault()
  try {
    const res = await axios.post('/api/login', formData, {
      headers : {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({email, password})
     
    })
    if(res.status === 400 || !res){
      toast.error('Invalid Credentials')
    } else {
    
      window.alert('Login successful')
    
     
      
      window.location.reload()
    
      history.push('/')

    }
   
  } catch (error) {
    console.log(error)
  }
}



  return (
    <div>
   
        <div className='container shadow my-5'>
            <div className='row'>
                <div className='col-md-5 d-flex flex-column align-items-center justify-content-center form'>
                    <h1 className='display-4 fw-bolder'>Welcome</h1>
                    <p className='lead text-center'>Enter Your Credentials To Login</p>
                    <h1 className='mb-4'>OR</h1>
                    <NavLink to='/register'>
                    <button type="button" class="btn btn-outline-primary mb-2">Register</button>
                    </NavLink>
                </div>
                <div className='col-md-6 p-5'>
                    <h1 className='display-6 fw-bolder text-center'>LOGIN</h1>

                    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" value={email} onChange={handleChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" value={password} onChange={handleChange}/>
  </div>
 
  <button type="submit" class="btn btn-primary mb-2" onClick={submitHandler}>Login</button>
</form>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Login