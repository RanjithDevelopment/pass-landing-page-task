import React, { useState } from 'react';
 import "../css/signupStyles.css";
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Logo from "../images/logo.png";
import { Link, useNavigate } from 'react-router-dom';
// import bgImg from "../images/bg image.jpg";
import FormLabel from '@mui/material/FormLabel';
import { RadioGroup,FormControlLabel } from '@mui/material';
import Radio from '@mui/material/Radio';
import Navabar from './Navabar';
function Signup() {
const history= useNavigate();
  let formvalues = {
   
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    mobilenumber: "",
   role:"",    
   error: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      mobilenumber: "",
      role:""
    }
  };

  const [formdata, setformdata] = useState(formvalues);
  
  
  // to handle all the onchange operation here i write a common function 
  const commonchange = (e) => {
    let error = { ...formdata.error };
    if (e.target.value === "") {

      error[e.target.name] = `${e.target.name} is Required`;
    } else {

      error[e.target.name] = "";
    }
    setformdata({ ...formdata, [e.target.name]: e.target.value, error })
  
  };
  //to handle the submit event 
  const handlesubmit =  async(event) => {
    event.preventDefault();
    
//add the user to the database
await axios.post("https://pass-backend-org.onrender.com/api/register/signup",{
  
firstname:formdata.firstname,
lastname:formdata.lastname,
email:formdata.email,
password:formdata.password,
confrimpassword:formdata.confirmpassword,
mobilenumber:formdata.mobilenumber,
role:formdata.role
}).then(()=>history('/Login'))
setformdata(formvalues);
  };
  return (
    <>
    <Navabar/>
    <div className='heading'> <h1>SignUp Yourself</h1></div>
    <div className='bg'>
  

      <div className="register">
      {/* <div >
    <img  src={Logo}/>
      </div>  */}
     
<div className="container-signup">

<Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          onSubmit={(event) => handlesubmit(event)}
          autoComplete="off"
        >
          <TextField
            id="firstname"
            label="firstName"
            variant="standard"
            value={formdata.firstname}
            name="firstname"
            onChange={(e) => commonchange(e)} />
          <br />
          <span style={{ color: "red" }}>{formdata.error.firstname}</span>
          <br />
          <TextField
            id="lastname"
            label="lastName"
            variant="standard"
            value={formdata.lastname}
            name="lastname"
            onChange={(e) => commonchange(e)} />
          <br />
          <span style={{ color: "red" }}>{formdata.error.lastname}</span>
          <br />

          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={formdata.email}
            name="email"
            onChange={(e) => commonchange(e)} />
          <br />
          <span style={{ color: 'red' }}>{formdata.error.email}</span><br />
          <TextField
            id="password"
            label="password"
            type="password"
            variant="standard"
            value={formdata.password}
            name="password"
            onChange={(e) => commonchange(e)} />
          <br />
          <span style={{ color: "red" }}>{formdata.error.password}</span>
          <br />
          <TextField
            id="confirmpassword"
            label="confirmpassword"
            variant="standard"
            type="password"
            value={formdata.confirmpassword}
            name="confirmpassword"
            onChange={(e) => commonchange(e)} />
          <br />
          <span style={{ color: "red" }}>{formdata.error.confirmpassword}</span>
          <br />
          <TextField
            id="mobilenumber"
            label="mobilenumber"
            variant="standard"
            type="number"
            value={formdata.mobilenumber}
            name="mobilenumber"
            onChange={(e) => commonchange(e)} />
          <br />
          <span style={{ color: "red" }}>{formdata.error.mobilenumber}</span>
          <br />
          <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
          <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="User"
              name="role"
              value={formdata.role}
              onChange={(e) =>{ commonchange(e);console.log(e.target.value);}}
            >
            
              <FormControlLabel value="student" control={<Radio />} label="Student" />
              <FormControlLabel value="User" control={<Radio />} label="User" />
              </RadioGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}

          >
            Sign Up
          </Button>
          <br />
          Already have an account?
          <div className="alt-login">
 <div className="signup"><Link to="/" style={{color:"white"}}>Sign IN</Link></div>
        </div>

        </Box>
</div>
{/* <div className="col-2">
    <img src={bgImg} alt="" />
</div> */}
</div>
       
      
    </div>
    </>
  );
}
export default Signup;
