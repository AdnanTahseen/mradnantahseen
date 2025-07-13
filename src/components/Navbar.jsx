import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
        <img src='assets/images/profile.jpg' className='profile_logo'></img>
          Mr Solo Developer.
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>Skills</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>Testimonials</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;