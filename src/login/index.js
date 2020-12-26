import React, { useState } from 'react'
import LoginForm from './LoginForm'
import Router from '../router'
import {useSelector} from 'react-redux'
import Register from './Register'
import './login.css'



function Login() {
  
  const [newUser, setnewUser] = useState(false)

  

  const user = useSelector(state => state.login)
  console.log("user",user)

  const NewUser = (data)=>{
    setnewUser(data)
  }


  return (
    <div>
      {
        user ? (<Router />) : (
          newUser ? (<Register NewUser={NewUser} />) : (<LoginForm  NewUser={NewUser} />))
      }

    </div>
  )
}

export default Login
