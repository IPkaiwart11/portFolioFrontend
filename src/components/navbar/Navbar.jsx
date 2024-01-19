import React from 'react'
import "./navbar.scss"
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className='navcontainer'>
            <NavLink to='/'> <div>HOME</div></NavLink>
            <NavLink to='/about'> <div>ABOUT</div></NavLink>
            {/* <div>ABOUT</div> */}
            <NavLink to='/project'> <div>PROJECT</div></NavLink>
            <NavLink to='/user'> <div>CONTACT</div></NavLink>  
      </div>
    </>
  )
}

export default Navbar