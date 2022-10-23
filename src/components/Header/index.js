import React from 'react';
import profileImage from "../../assets/images/profile-img.png";
import ReactRoundedImage from "react-rounded-image";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Header() {
  return (
    <section className="my-5">
    <Jumbotron fluid className="mb-0">

      <Container>
          <Row>
            <Col sm={12} md={6}lg={4} className="justify-content-center">
              <ReactRoundedImage
                image={profileImage}
                imageWidth="400"
                imageHeight="350"
                borderRadius= "45" />
            </Col>
            <Col className="text-center pl-md-5">
               <h1 style = {{ backgroundColor: "gray", color: "#90ee90" }}>
                Full Stack Web Developer
               </h1>
            </Col>
          </Row>
        </Container>
        </Jumbotron>
        <Container class="shadow mb-5 bg-light">
          <h2></h2>
          <p></p>
        </Container>
    </section>
  );
}

export default Header;