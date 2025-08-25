import React, { useEffect, useState} from "react";
import { Button } from "reactstrap";
import {  ToastContainer } from "react-toastify";




const LoginPage=()=>{
  
      
        return (
            <>
            <ToastContainer/>
                <h1>Login Page</h1>
                <Button  color="primary" >login</Button>
             
            </>
        )
    }
   
export default LoginPage;