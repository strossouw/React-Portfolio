import React from 'react';
import coverImage from "../../assets/images/profile-img.png";
import ReactRoundedImage from "react-rounded-image";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Header() {
  return (
    <section className="my-5">
    <Jumbotron fluid className="mb-0" style={{ backgroundImage: "url('https://i.postimg.cc/d0hgJR20/Screenshot-2022-10-21-164540.jpg')", backgroundRepeat: 'no-repeat', backgroundSize:"contain" }}>

      <Container>
          <Row>
            <Col sm={12} md={6}lg={4} className="justify-content-center">
              <ReactRoundedImage
                image={coverImage}
                roundedColor="#b40086"
                imageWidth="350"
                imageHeight="350"
                borderRadius="45"/>
            </Col>
            <Col className="pl-md-5">
                <h1 className="display-4 text-center text-lg-left text-dark p-0-lg pt-4"></h1>
                <h1 className="text-dark text-center text-left h1">
                  Stephanie Rossouw
                </h1>
            </Col>
          </Row>
        </Container>
        </Jumbotron>
        <Container class="shadow mb-5 bg-light">
          <h2>About Me</h2>
          <p> I have a background that covers a variety of areas. This has given me a particular set of skills. </p> 
              
          <p>   I grew up on a cattle ranch in western South Dakota where I learned how to work hard and never give up.</p>
              
          <p> I started my professional career in retail while in college. After obtaining my Associate of Applied Science in Management/Marketing/Sales 
              I continued working in retail for several years. Through this experience I learned how to be adaptable to changing conditions and what it means to be a great leader. </p>
              
          <p> After obtaining my Associate of Applied Science in Financial Services, I then switched careers to Accounting. I started working in the student loan industry where I have now been for more than 10 years. 
              Through this experience I have gained a great deal of experience in analyzing data, trends, and have picked up a passion for process automation. 
              All of these have led me down the path of Computer Science and Web Development. I have found this to be the perfect blend of all my previous work experience and gives me a wide variety of new and exciting experiences. 
              I get to market new web designs, account for all of the data coming in and going out and analyze how that data affects your business. </p>
          </Container>
    </section>
  );
}

export default Header;