
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { BrowserRouter,  Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Logout from './components/Logout';
import Protectedroute from './components/protectedRoute';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [auth, setAuth] = useState(false)
  const [auth1, setAuth1] = useState(true)

  const isLoggedin = async () => {
    try {
      const res = await axios.get('/api/auth', {
        headers : {
           Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      })

      if(res.status === 200){
        setAuth(true)
        setAuth1(false)
      } 
      if(res.status === 401){
        setAuth(false)
        setAuth1(true)
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedin()
  }, [])


  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar auth={auth1}/>
      <Switch>
        <Route exact path='/'  component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact'  exact component ={Contact}/>
        <Route path="/services" exact component={Services}/>
        <Protectedroute exact path='/login'  component={Login} auth={auth1}/>
        <Protectedroute path='/register'  exact component={Register} auth={auth1} />
        <Protectedroute path='/dashboard' exact component={Dashboard} auth={auth}  />
        <Protectedroute path='/logout' exact component={Logout} auth={auth} />
       
      
       
        
      </Switch>
      </BrowserRouter>
      <ToastContainer />
     
     <Footer/>
    </div>
  );
}

export default App;
