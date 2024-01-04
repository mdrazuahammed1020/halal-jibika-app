import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import { useContext, useState } from 'react';
import UserContext from '../../UserContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../authentication/firebase.config';
import { signOut } from 'firebase/auth';
import { FaBars } from 'react-icons/fa';
import { toast } from 'react-toastify';
export default function Header() {
  const {totalAppliedJob, totalFavorite} = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user] = useAuthState(auth)

  const logout = () => {
    signOut(auth)
    toast.success('Logout succesfully!!');
  }

  const toggleMenu = () => {
    document.querySelector('.nav-links').classList.toggle('active');
  }

  return (
    <div>
        <nav className='navbar' >

          <div className='logo'>
              <h3>Halal Jibika</h3>
          </div>

          <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <FaBars /> {/* Use the hamburger icon */}
           </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <NavLink to={'/'} >Home</NavLink>
                <NavLink to={'/about'} >About</NavLink>
                <NavLink to={'/jobs'} >Jobs</NavLink>
                <NavLink to={'/contact'} >Contact</NavLink>
                <NavLink to={'/favorite'} >Favorite <span>{totalFavorite.length}</span> </NavLink>
                <NavLink to={'/appliedjobs'} >Applied Jobs  <span>{totalAppliedJob.length}</span></NavLink>
                <NavLink to={'/addjob'} >Add Job</NavLink>
                <NavLink to={'/signup'} >SignUp</NavLink>
                {
                  user ? <Link onClick={logout} >Logout</Link>: <NavLink to={'login'}>Login</NavLink>
                }
                <span className='user-name-profile' > <span className='profile-img-user'>{user?.photoURL?<img src={user?.photoURL}></img>: <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" /> }</span> <span>{user ? user?.displayName : 'User'}</span>  </span>
            </ul>
        </nav>

    </div>
  )
}
