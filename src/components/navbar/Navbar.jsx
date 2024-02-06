
import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import "./navbar.scss"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <span><MenuIcon sx={{ fontSize: 50 }}/></span>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
            <NavLink to='/about'>ABOUT</NavLink>
            </li>
            <li>
            <NavLink to='/project'> PROJECT</NavLink>
            </li>
            <li>
            <NavLink to='/user'>CONTACT</NavLink>  
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar