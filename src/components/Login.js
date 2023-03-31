import React, { useState } from "react";
import "../css/LoginStyles.css";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import Navabar from "./Navabar";
import jwt_decode from "jwt-decode";

const Login = ({ login }) => {
  const navigate = useNavigate();
  let loginvalues = {
    email: "",
    password: "",
    error: {
      email: "",
      password: ""

    }
  };
  //State Variables 
  
  const [Logindata, setlogindata] = useState(loginvalues);
  
  /// here is onchange function 
  const commonchange = (e) => {
    let error = { ...Logindata.error };
    if (e.target.value === "") {

      error[e.target.name] = `${e.target.name} is Required`;
    } else {

      error[e.target.name] = "";
    }
    setlogindata({ ...Logindata, [e.target.name]: e.target.value, error });

  };
  //Login Submission 
  const handlesumit =async () => {
  const response = await axios.post("https://pass-backend-org.onrender.com/api/register/signin",{...Logindata});

//storing token in localStorage 
if(response){
localStorage.setItem("token",response.data);

const token = localStorage.getItem("token");
const existuser = jwt_decode(token);

 existuser.existUser.role==="admin" ? navigate('/adminpannel' ): navigate('/')
}



//    logedUser? useNavigate("/homepage"):<></>;
};
  return (
    <>
<Navabar/>
      <div className="page">

        <div className="cover" >
          <h1 >Welcome to {login} Login</h1>
<p style={{color:"black"}}>If You Are An Admin It will Redirect To The DashBoard </p>
          <input placeholder="Sample@guvi.in" name="email"
            type="email"
            onChange={(e) => commonchange(e)}
            value={Logindata.email} />
          <input type="password" placeholder="password" 
             name="password"
            onChange={(e) => commonchange(e)}
            value={Logindata.password} />

          <button className="login-btn" onClick={handlesumit}>Login</button>
          <p className="text" style={{color:"black"}}>Or SignUp</p>

          <div className="alt-login">
            <div className="signup"><Link to="/Signup"  style={{color:"white"}}>SignUp</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
