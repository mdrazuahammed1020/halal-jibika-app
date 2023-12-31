import { NavLink } from 'react-router-dom'
import './Header.css';
export default function Header() {
  return (
    <div>
        <nav className='header' >
            <h3>Halal Jibika</h3>
            <ul>
                <NavLink to={'/'} >Home</NavLink>
                <NavLink to={'/about'} >About</NavLink>
                <NavLink to={'/jobs'} >Jobs</NavLink>
                <NavLink to={'/contact'} >Contact</NavLink>
                <NavLink to={'/favorite'} >Favorite</NavLink>
                <NavLink to={'/signup'} >SignUp</NavLink>
                <NavLink to={'/appliedjobs'} >Applied Jobs</NavLink>
                <NavLink to={'/addjob'} >Add Job</NavLink>
            </ul>
        </nav>
    </div>
  )
}
