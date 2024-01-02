import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import auth from '../../authentication/firebase.config';
import { toast } from 'react-toastify';

export default function SignUp() {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if(user){
    navigate('/')
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;

    if(password !== confirmpassword){
      return toast.error("password dosent math")
    }

    
    console.log(email, password)
    await createUserWithEmailAndPassword(email, password)
    return toast.success('successfully logged in..')
    // await updateProfile({displayName: firstname})
    // return toast.success("signin successful");
    
  }

  return (
    <div className='signup-wrapper'>
      
      <div className='form-text-wrapper'>
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
      <p className='account-redirect-btn'>Already have an account ? <span><b onClick={()=> navigate('/login')} >logIn</b></span> </p> 
      </div>
      


    </div>
  )
}
