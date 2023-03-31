import React from "react";
import Home from "./routes/home";
import {Routes,Route} from "react-router-dom";
import Contact from "./components/contact";
import Login from "./components/Login";
import Adminpannel from "./routes/Adminpannel";
import AddAdmin from "./components/addAdmin";
import Signup from "./components/Signup";
import Viewuser from "./components/viewuser";
function App() {
  return (
    <div  >
     
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/signUp" element={<Signup/>}/>
        <Route path="/adminpannel" element={<Adminpannel/>}/>
        <Route path="/addAdmin" element={<AddAdmin/>}/>
        <Route path="/viewusers" element={<Viewuser/>}/>
      </Routes>
     </div>
  );
}

export default App;
