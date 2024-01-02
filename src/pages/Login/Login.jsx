import React from 'react'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import './Login.css'

const obj = {
  size: '14px',
  color: 'teal',
  curson: 'pointer'
}


export default function Login() {
 
  return (
    <div>
       <div className="login-wrapper">
        <div className="login">
          <h2>LogIn</h2>
          <form>

            <div className="form-inner">
              <input type="email" name='email' placeholder='Enter your email' />
              <input type="password" name='password' placeholder='Enter password' />
              <button className='submit-log-in' type='submit' >Login</button>
              
            </div>
        
          </form>

            <button className='icons-icn'> <FaGoogle /> <span>Continue with Google</span></button>

            <button className='icons-icn'><FaGithub /><span>Continue with GitHub</span></button>
        </div>
       </div>
    </div> 
            
  )
}



