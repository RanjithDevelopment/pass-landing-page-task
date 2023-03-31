import React from 'react'
import "../css/NavbarStyles.css";
import {Link} from "react-router-dom"; 
import Logo from "../assests/passon .png";
import google from "../assests/google.png";
import appstore from "../assests/appstore.png";
const Navabar = () => {
  const token = localStorage.getItem("token");
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid ">
   <img src={Logo} className="labels" alt="this is logo"/>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="nav justify-content-center">
        <li className="nav-item">
         <Link to="/" style={{ textDecoration: 'none' }} >About us</Link>
        </li>
        <li className="nav-item ">
          <Link to="/">How it works</Link>
        </li>
        <li className="nav-item">
        <Link to="/">Features</Link> 
        </li>
        <li className="nav-item">
        <Link to="/"> Blog</Link>
        </li>
        <li className="nav-item">
         <Link to="/contact">Contact </Link> 
        </li>
       {
       token? <li className="nav-item">
         <Link to="/Login">Login </Link> 
        </li>:<></>
        }
        
        <li className="nav-item">
         <Link to="/signUp">signUp </Link> 
        </li>
      </ul>
      <img src={google} className="labels" alt="this is logo"/>
      <img src={appstore} className="labels" alt="this is logo"/>
    </div>
  </div>
</nav>
  </>
  )
}

export default Navabar
