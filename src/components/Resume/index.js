import React from "react";

import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
  return (
    <div>
      <Jumbotron fluid className="shadow p-5 mb-5">
        <Container className="text-center ">
          <div className="p-md-5">
            <h1 style={{ backgroundColor: "gray", color: "#90ee90" }}>
              Resume
            </h1>
          </div>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <Col sm={10} md={5} lg={4} className="justify-content-center">
            <Card>
              <Card.Body>
                <Card.Header className="text-center">
                  <h3>Resume</h3>
                </Card.Header>
                <div>
                  <a href="https://drive.google.com/file/d/1cBiYf7s77mrZWyPru1jEvezlQjsydLDy/view?usp=sharing" download>
                    Click to download
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
