import React from "react";
import Header from "../components/Header";
import NormalMenus from "./NormalMenus";
import Login from "../components/User/Login";
import { Col, Row } from "reactstrap";



function FrontPage() {
  return (
   <>
   <Header />
   <Row>
          <Col md={3}>
          <NormalMenus />
          </Col>
          <Col md={9}>
          <Login />
          
          </Col>
  </Row>
   </>
   
  );
}

export default FrontPage;
