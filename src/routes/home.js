import React,{useState} from 'react'
import Body from '../components/body'
import Header from '../components/Header'
import Navabar from '../components/Navabar'

const Home = () => {
   //const navigate = useNavigate();
   let loginvalues = {
    name:"",
    email: "",
    number: "",
    error: {
        name:"",
      email: "",
      number: ""

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
    console.log(Logindata)

setlogindata(loginvalues);
};
  const[popUp,setPopUp] = useState(false);
  return (
    <div onClick={()=>setPopUp(!popUp)}>
      <Navabar />
      <Header />
      <Body />

    {popUp?  <div  className="page">
<div className='popup'>
<div style={{marginTop:"5%"}} className="cover" >
  <h1 >Add New Admin</h1>
  <input type="text" placeholder="name" 
     name="name"
    onChange={(e) => commonchange(e)}
    value={Logindata. username} />
  <input placeholder="Sample@guvi.in" name="email"
    type="email"
    onChange={(e) => commonchange(e)}
    value={Logindata.email} />
  <input type="number" placeholder="Contact Number" 
     name="number"
    onChange={(e) => commonchange(e)}
    value={Logindata.password} />
  

  <button className="login-btn" onClick={handlesumit}>Submit</button>

</div>
</div>
</div>
:<></>
}


    </div>
  )
}

export default Home
