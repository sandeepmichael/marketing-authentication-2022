import axios from 'axios'
import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const Logout = () => {
    const history = useHistory()

    const logout = async() => {
        try {
        const res = await axios.get('/api/logout', {
            headers : {
                Accept : "application/json",
                "Content-Type": "application/json"
            },
            credentials : "include"
        })
        if(res.status === 401 || !res){
            toast.error('something went wrong')
        } else {
            history.push('/')
            window.location.reload()
        }
    } catch (error) {
        console.log(error)
    }

    }
    useEffect(()=>{
         logout();
    })

  return (
    <div>

    </div>
  )
}

export default Logout