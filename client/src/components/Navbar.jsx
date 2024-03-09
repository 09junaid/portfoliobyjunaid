import React from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from "../store/auth"
export function Navbar() {
  const {isLoggedIn}=useAuth();
    return (
        <>
<nav className="navbar navbar-expand-lg text-dark background-transparent fixed-top"style={{padding:"0px",background:"#616161"}}>
  <div className="container">
    <NavLink className="navbar-brand" to="/">
        <img src="/images/ja2-logo.png" alt="junaidlogo" width="80" height="50"/>
    </NavLink>
    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justifiy-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-7 align-items-center fs-8" style={{fontFamily:"sans-serif"}}>
        <li className="nav-item mx-2">
          <NavLink className="nav-link active" aria-current="page" to="/"style={{color:"orange",background:"linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))",borderRadius:"10%"}}>Home</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link" to="/about" style={{color:"orange"}}>About</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link" to="/service"style={{color:"orange"}}>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contacts"style={{color:"orange"}}>Contacts</NavLink>
        </li>
        {/* ------------this functionallity used for logout user------------ */}
        {isLoggedIn?<li className="nav-item mx-2 ">
          <NavLink className="nav-link" to="/logout" style={{color:"orange"}}>Logout</NavLink>
        </li>:<> <li className="nav-item mx-2 ">
        <NavLink className="nav-link" to="/register"style={{color:"orange"}}>Sign Up</NavLink>
      </li>
      <li className="nav-item mx-2">
        <NavLink className="nav-link" to="/login"style={{color:"orange"}}>Login</NavLink>
      </li></>
       
       }
       
       
        {/* <li className="nav-item mx-2">
          <NavLink className="nav-link" to="/logout"style={{color:"orange"}}>Logout</NavLink>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}