import { Button } from '@material-ui/core';
import React from 'react'
import '../css/Login.css'
import icon from '../images/icon.png';
import {auth,provider} from '../firebase'
   
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider)
      .catch(error=>alert(error.message))
  }
  return (
    <div className="login">
      <div className="login_logo">
        <img src={icon} className="App-logo" alt="logo" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
