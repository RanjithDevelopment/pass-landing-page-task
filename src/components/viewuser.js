import React, { useEffect, useState } from 'react';
import "../css/viewuser.css";
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Adminpannel from '../routes/Adminpannel';
import { border } from '@mui/system';

const Viewuser = () => {
    const [apiData,setapidata]=useState();
    const token= localStorage.getItem("token");
    //mounting phase of the component 
  useEffect(() => {
    // on mounting phase here i hit the api and get the response
    async function getapidata() {
      const response = await axios.get("https://pass-backend-org.onrender.com/api/users/get",{
        headers: {
          accesstoken: token,
        }});

     setapidata(response.data);
    }
    getapidata();
},[]);
  //here i write the function for handling the delete operations 
  const HandleDelete = async (id) => {
    console.log(id);
    const deletedata = await axios.delete(`https://pass-backend-org.onrender.com/api/users/delete/${id}`,{
        headers: {
          accesstoken: token,
        }});
    const user = apiData.filter((row) => row.id !== deletedata.data.id);
   setapidata(user);
   
  };

  return (
    <>
    <Adminpannel/>
    <div className='Table'>
     {apiData?  <TableContainer component={Paper} sx={{ width: 800,marginTop:"10%",border:"5px" }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Mobile No</TableCell>
                  <TableCell align="right">Role</TableCell>
                  <TableCell align="right">Ation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {apiData.map((row) => (
                  <TableRow key={row.id}>
                    
                    <TableCell align="right">{row.firstname} {row.lastname}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.mobilenumber}</TableCell>
                    <TableCell align="right">{row.role}</TableCell>
                  
                    <TableCell align="right">
                     
                      <Button variant="text" onClick={() => HandleDelete(row._id)}>Delete</Button>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          :<></>}
    </div>
    </>
  )
}

export default Viewuser
