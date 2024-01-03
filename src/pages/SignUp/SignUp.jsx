import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import auth from '../../authentication/firebase.config';
import { toast } from 'react-toastify';
import { FaHome } from "react-icons/fa";

export default function SignUp() {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });
  const navigate = useNavigate();
  const [updateProfile, updating] = useUpdateProfile(auth);
  if(user){
    navigate('/')
  }
  const handleSignUp = async (e) => {
    e.preventDefault()
    const firstname = e.target.firstname.value.trim();
    const lastname = e.target.lastname.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirmpassword = e.target.confirmpassword.value.trim();

    if(!firstname || !lastname || !email || !password || !confirmpassword) {
      return toast.error("Please fill up all fields.!!!")
    }
    if(password !== confirmpassword){
      return toast.error("password dosent match")
    }


    try {
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: firstname });
    toast.success('Successfully signed up.');
    navigate('/');
      } catch (error) {
    toast.error('Error signing up.');
    console.error('Error signing up:', error);
      }
  }

  return (
    <div className='signup-wrapper'>
      <div className='form-text-wrapper'>
      <p className='home-icons'><span onClick={()=> navigate('/')} className='home-icon'> <  FaHome /> </span></p>
        <h2>Please Singup here....</h2>
      <div className="form-wrapper-inner">
      <form onSubmit={handleSignUp}>
          <input type="text" name='firstname' placeholder='First Name' />
          <input type="text" name='lastname' placeholder='Last Name' />
          <input type="email" name='email' placeholder='Email' />
          <input type="password" name='password' placeholder='Password' />
          <input type="password" name='confirmpassword' placeholder='Confirm Password' />
          <input type="submit" value="Submit" />
        </form>
      </div>
      
      <p className='account-redirect-btn'>  Already have an account ? <span><b onClick={()=> navigate('/login')} >logIn</b></span> </p> 
      
      </div>
      


    </div>
  )
}
