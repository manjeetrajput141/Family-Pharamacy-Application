import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col,Row } from "reactstrap";

function Header(){
    function changeStyle(){
        var element = document.getElementById("myDiv");
        element.style.backgroundColor = "#00FF00";
    }
    const navigate=useNavigate();
    const homeUrl=()=>{
        navigate(`/home`);

    }
    const loginUrl=()=>{
        navigate(`/user/login`);

    }
    const signupUrl=()=>{
        navigate(`/admin/user/signup`);

    }
    const contactUrl=()=>{
        navigate(`/user/contact`);

    }
  
    return(
        

    <div style={{background:"#07A9AE",padding:30}} >
       

       
        <h1 style={{color:"black",textAlign:"center"}}>Family Pharmacy </h1>
        <p className="text-center">Gali No 4,Prakash Nagar,Near Ambedkar gate Khora Colony(Gzb) 201309</p>
        <div style={{textAlign:"right"}}>
            <Button style={{background:"green",padding:10,paddingBlock:10}} onClick={homeUrl}>Home</Button>
            <Button style={{background:"green",padding:10,paddingBlockEnd:10}} onClick={loginUrl}>SignIn</Button>
            <Button style={{background:"green",padding:10,paddingBlockEnd:10}} onClick={signupUrl}>SignUp</Button>
            <Button style={{background:"green",padding:10,paddingBlockEnd:10}} onClick={contactUrl}>About Us</Button>
        </div>
     
    </div>
    );
}
export default Header;