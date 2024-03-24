import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavbarResp.css'


const NavbarFront = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <>
      <nav className="fixed-top nav">
        <div className="title"><a className="navbar-brand fw-bold fs-3" href="/">
          <img src="./Photos/foodies3.png" title="app icon" alt="iconimg" style={{height:"4.3rem" , width:"13rem"}}/>
        </a></div>
        <div className="menu" onClick={
          () => {
            setmenuOpen(!menuOpen)
            // seticon(!CloseIcon)
          }
        }>
          { menuOpen ? (<h1><i class="fa-solid fa-xmark"></i></h1>) : (<h1><i class="fa-solid fa-bars"></i></h1>)}
          {/* <span></span>
          <span></span>
          <span></span> */}
        </div>
        <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/login" className="underline">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="underline">
            Signup
          </NavLink>
        </li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarFront;