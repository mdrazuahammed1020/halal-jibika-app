import React from 'react'
import { FaGoogle, FaGithub } from 'react-icons/fa'

import './SocialAuth.css'
import auth from '../../authentication/firebase.config';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

export default function SocialAuth() {
const [signInWithGoogle, googleUser, googleLoading, googleError] =
  useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
  useSignInWithGithub(auth);

  const navigate = useNavigate();
  let errorElement;

  if (googleLoading || githubLoading) {
    return <h2>loading....</h2>;
  }
  
  if (googleUser||githubUser) {
    navigate("/");
    toast.success(`Log In Successfully`, {
      toastId: "success1",
    });
  }

  return (
    <div>
         <button onClick={()=> signInWithGoogle()} className='icons-icn'> <FaGoogle /> <span>Continue with Google</span></button>

        <button onClick={()=> signInWithGithub()} className='icons-icn'><FaGithub /><span>Continue with GitHub</span></button>
    </div>
  )
}
