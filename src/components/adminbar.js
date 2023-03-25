
import "../css/adminbar.css";
import React ,{useState}from 'react'
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";
const AdminBar = () => {
    const [click,setClick]=useState(false);
    const handleClick =()=>setClick(!click);
    const [color,setColor]=useState(false);
    const changeColor=()=>{
      if(window.scrollY >=100 ){
        setColor(true);
    }else{
      setColor(false);
    }
    }; 
    window.addEventListener("scroll",changeColor);
      return (
        <div className={color ? "header header-bg":"header" }>
          <Link to='/Navbar' >
          
          <h1 style={{color:"white"}}>ADMIN DASHBOARD</h1>
          </Link>
          <ul className={click ? "nav-menu active" :"nav-menu"}>
            <li>
                <Link to='/addAdmin' style={{color:"white"}}>ADD ADMIN</Link>
            </li>
            <li>
                <Link to='/' style={{color:"white"}}>view User Record</Link>
            </li>
            <li>
                <Link to='/' style={{color:"white"}}>landing page</Link>
            </li>
            <li>
                <Link to='/' style={{color:"white"}}>Contact page</Link>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {
    click ? ( <FaTimes size={20} style={{color:"#fff"}}/>) :(<FaBars size={20} style={{color:"#fff"}}/>)
            }
           
            
          </div>
        </div>
      )
}

export default AdminBar;
