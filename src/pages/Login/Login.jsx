import React from 'react'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import './Login.css'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../authentication/firebase.config';
import { toast } from 'react-toastify';
// import auth from '../../authentication/firebase.config';
// import { useAuthState } from 'react-firebase-hooks/auth';

const obj = {
  size: '14px',
  color: 'teal',
  curson: 'pointer'
}


export default function Login() {
  // const [user] = useAuthState(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
  useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
  useSignInWithGithub(auth);

  const navigate= useNavigate()

  let errorElement;
  if (googleLoading || githubLoading) {
    return <h2>loading....</h2>;
  }
  // if (googleError || githubError) {
  //   errorElement = (
  //     <p className="text-red-600">
  //       Error: {googleError?.message} {githubError?.message}
  //     </p>
  //   );
  // }
  
  if (googleUser||githubUser) {
    navigate("/");
    toast.success(`Log In Successfully`, {
      toastId: "success1",
    });
  }

 
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

            <button onClick={()=> signInWithGoogle()} className='icons-icn'> <FaGoogle /> <span>Continue with Google</span></button>

            <button onClick={()=> signInWithGithub()} className='icons-icn'><FaGithub /><span>Continue with GitHub</span></button>
        </div>
       </div>
    </div> 
            
  )
}



