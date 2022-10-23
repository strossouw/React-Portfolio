import React from 'react';
import Project from '../components/Project';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './stylesheet.css'


import PWA from '../assets/images/Jate.jpg';


function Projects() {
    const projects = [
        {
          "title": "PWA Text Editor",
          "desc": "The basis of the project is to create a Progression Web App that can edit and store JavaScript text. The Application is also available offline.",
          "key": "text-editor",
          "imageSrc":PWA,
          "repository": "https://github.com/strossouw/PWA-Text-Editor",
          "appURL": "https://ancient-basin-44560.herokuapp.com/"
        }
    
    ]
        return(
          <div>
       <Jumbotron fluid className="shadow p-5 mb-5">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 style = {{ backgroundColor: "gray", color: "#800080" }}>Projects </h1>
          </div>
        </Container>
      </Jumbotron>
       
      <Container className="p-2 shadow">
        <Row>
                {projects.map((project) => {
            return(
              <Col s={12} lg={6} key={project.key}>
                <Project project={project} />
              </Col>
            )
          })}
        </Row>
        </Container>
          </div>
        )
}
export default Projects;