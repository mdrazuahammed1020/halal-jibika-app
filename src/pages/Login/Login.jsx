import React from 'react'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import './Login.css'
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaHome } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../authentication/firebase.config';
import { toast } from 'react-toastify';

const obj = {
  size: '14px',
  color: 'teal',
  curson: 'pointer'
}


export default function Login() {
  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
  useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
  useSignInWithGithub(auth);

  const navigate= useNavigate()
  const location = useLocation();


  let from = location.state?.from?.pathname || "/";

  // let errorElement;
  if (googleLoading || githubLoading) {
    return <h2>loading....</h2>;
  }
  
  if (user) {
    console.log(from)
    navigate(from, { replace: true });
    toast.success(`Log In Successfully`, {
      toastId: "success1",
    });
  }

  
  if (googleUser||githubUser) {
    navigate("/");
    toast.success(`Log In Successfully`, {
      toastId: "success1",
    });
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };


 
  return (
    <div>
       <div className="login-wrapper">
        <div className="login">
        <p className='home-icons'><span onClick={()=> navigate('/')} className='home-icon'> <  FaHome /> </span></p>
          <h2>LogIn</h2>
          <form onSubmit={handleSignIn}>

            <div className="form-inner">
              <input type="email" name='email' placeholder='Enter your email' />
              <input type="password" name='password' placeholder='Enter password' />
              <button className='submit-log-in' type='submit' >Login</button>
              
            </div>
        
          </form>

            <button onClick={()=> signInWithGoogle()} className='icons-icn'> <FaGoogle /> <span>Continue with Google</span></button>

            <button onClick={()=> signInWithGithub()} className='icons-icn'><FaGithub /><span>Continue with GitHub</span></button>
        </div>
       </div>
    </div> 
            
  )
}



