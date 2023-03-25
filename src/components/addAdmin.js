import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginStyles.css";
import AdminBar from "./adminbar";
import axios from "axios"
const AddAdmin = () => {
    const navigate = useNavigate();
  let loginvalues = {
    firstname:"",
    email: "",
    password: "",
    confrimpassword:"",
    error: {
       firstname:"",
      email: "",
      password: "",
      confrimpassword:""

    }
  };
  //State Variables 
  
  const [formdata, setformdata] = useState(loginvalues);
  
  /// here is onchange function 
  const commonchange = (e) => {
    let error = { ...formdata.error };
    if (e.target.value === "") {

      error[e.target.name] = `${e.target.name} is Required`;
    } else {

      error[e.target.name] = "";
    }
    setformdata({ ...formdata, [e.target.name]: e.target.value, error });

  };
  //Login Submission 
  const handlesumit =async () => {
    console.log(formdata)
 const response = await axios.post("https://pass-on-landing-page.onrender.com/api/register/signup",{
  
firstname:formdata.firstname,

email:formdata.email,
password:formdata.password,
confrimpassword:formdata.confrimpassword,
role:"admin"
  }).then(navigate("/adminpannel"));
setformdata(loginvalues);
  
};
  return (
    <>
    <AdminBar/>
    <div  className="page">

    <div style={{marginTop:"5%"}} className="cover" >
      <h1 >Add New Admin</h1>
      <input type="text" placeholder="firstname" 
         name="firstname"
        onChange={(e) => commonchange(e)}
        value={formdata. firstname} />
      <input placeholder="Sample@guvi.in" name="email"
        type="email"
        onChange={(e) => commonchange(e)}
        value={formdata.email} />
      <input type="password" placeholder="password" 
         name="password"
        onChange={(e) => commonchange(e)}
        value={formdata.password} />
      
      <input type="password" placeholder="confrimpassword" 
         name="confrimpassword"
        onChange={(e) => commonchange(e)}
        value={formdata.confrimpassword} />
      <button className="login-btn" onClick={handlesumit}>Add Admin</button>
    
    </div>
  </div>
  </>
  )
}

export default AddAdmin
