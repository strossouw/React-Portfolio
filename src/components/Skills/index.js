import React from 'react';

import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Skills() {
    return(
        <div>
        <Jumbotron fluid className="shadow p-5 mb-5">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Skills <span><br/>&amp;<br/></span> Certificates</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container>
      <Row>
        <Col sm={12} md={6}lg={4} className="justify-content-center">
          <Card>
              <Card.Body>
                  <Card.Header className="text-center"><h3>Frontend</h3></Card.Header>
                  <ul > TODO:
                      <li>JavaScript</li>
                      <li>CSS</li>
                      <li>HTML</li>
                      <li>Bootstrap</li>
                      <li>Handlebars</li>
                      <li>React</li>
                      <li>jQuery</li>
                  </ul>
              
              </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={6}lg={4} className="justify-content-center">
          <Card>
              <Card.Body>
                  <Card.Header className="text-center"><h3>Backend</h3></Card.Header>
                  <ul > TODO:
                      <li>SQL</li>
                      <li>NoSQL</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>Sequelize</li>
                  </ul>
              </Card.Body>
          </Card>
          </Col><Col sm={12} md={6}lg={4} className="justify-content-center">
          <Card>
              <Card.Body>
              <Card.Header className="text-center"><h3>TODO:</h3></Card.Header>
              <ul > TODO:
                      <li></li>
                </ul>
              </Card.Body>
          </Card>
          </Col>
          </Row>

      </Container>

    </div>
    )
}

export default Skills;