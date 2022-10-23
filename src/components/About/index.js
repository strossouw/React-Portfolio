import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function About() {
  return (
    <div>
      <Jumbotron fluid className="shadow p-5 mb-5">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 style = {{ backgroundColor: "gray", color: "#800080" }}>
              <span>About Me</span>
            </h1>
          </div>
        </Container>
      </Jumbotron>

      <Container>
        <Row className="justify-content-center">
          <div className="my-2">
            <p>
              {" "}
              I have a background that covers a variety of areas. This has given
              me a particular set of skills.{" "}
            </p>

            <p>
              I grew up on a cattle ranch in western South Dakota where I
              learned how to work hard and never give up.
            </p>

            <p>
              I started my professional career in retail while in college. After
              obtaining my Associate of Applied Science in
              Management/Marketing/Sales I continued working in retail for
              several years. Through this experience I learned how to be
              adaptable to changing conditions and what it means to be a great
              leader.
            </p>

            <p>
              After obtaining my Associate of Applied Science in Financial
              Services, I then switched careers to Accounting. I started working
              in the student loan industry where I have now been for more than
              10 years. Through this experience I have gained a great deal of
              experience in analyzing data, trends, and have picked up a passion
              for process automation. All of these have led me down the path of
              Computer Science and Web Development. I have found this to be the
              perfect blend of all my previous work experience and gives me a
              wide variety of new and exciting experiences. I get to market new
              web designs, account for all of the data coming in and going out
              and analyze how that data affects your business.{" "}
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default About;
