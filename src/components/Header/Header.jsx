import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import { useContext, useState } from 'react';
import UserContext from '../../UserContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../authentication/firebase.config';
import { signOut } from 'firebase/auth';
import { FaBars } from 'react-icons/fa';
export default function Header() {
  const {totalAppliedJob} = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user] = useAuthState(auth)

  const logout = () => {
    signOut(auth)
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
                <NavLink to={'/favorite'} >Favorite</NavLink>
                <NavLink to={'/appliedjobs'} >Applied Jobs  <span>{totalAppliedJob.length}</span></NavLink>
                <NavLink to={'/addjob'} >Add Job</NavLink>
                <NavLink to={'/signup'} >SignUp</NavLink>
                {
                  user ? <Link onClick={logout} >Logout</Link>: <NavLink to={'login'}>Login</NavLink>
                }
                <span>{user?.displayName}</span>
            </ul>
        </nav>

    </div>
  )
}
