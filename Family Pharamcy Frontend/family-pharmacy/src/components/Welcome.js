import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';


function Welcome() {

  const navigate=useNavigate();
  const continueWithoutLogin = () => {

    navigate(`/login`);

  };


    return (
       <>
      

      <div>
      <Card body>
        <CardTitle className='text-center'><h3>Welcome to Our Family Pharmacy website</h3></CardTitle>
        <CardText>You can easily search items add to our cart and also place order online</CardText>
        <Button>Login</Button>
      </Card>
      <Card body className="text-center">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>You just need to signup by using mobile number or Email</CardText>
        <Button>SignUp</Button>
      </Card>
      <Card body className="text-right">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button onClick={continueWithoutLogin}>Continue without Login</Button>
      </Card>
    </div>

       </>



    );
}
export default Welcome;