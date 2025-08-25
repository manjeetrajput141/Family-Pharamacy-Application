import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody,CardText,CardTitle } from "reactstrap";

function Home(){

  const navigate=useNavigate();
      const homeUrl=()=>{
          navigate(`/home`);
  
      }
      const userHome=()=>{
          navigate(`/user/home`);
  
      }
      const adminHome=()=>{
          navigate(`/admin/home`);
  
      }
     
    return(

   <div>
    <Card>
    <CardBody>
      <CardTitle tag="h5">
        Family Pharmacy 
      </CardTitle>
      <CardText>
        We provide all the Medicines online as well as offline Please visit our pharmacy.
        You can easily check that medicines are available in shop or not </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
         <Button style={{background:"green",padding:10,paddingBlock:10,paddingLeft:30}} onClick={userHome}>User Home</Button>
                  <Button style={{background:"green",padding:10,paddingBlockEnd:10,paddingLeft:30,paddingRight:30}} onClick={adminHome}>Admin Home</Button>
    </CardBody>
    </Card>
   </div>
    );
}
export default Home;