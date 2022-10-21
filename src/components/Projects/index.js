import React from 'react';
import Project from "../Projects";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


//project images
import teamProfile from "../../assets/images/team-profile.jpg";


function Projects() {
    const projects = [
        {
          "title": "Generate Team Profile",
          "desc": "This project is a node.js application. It will take user inputs to generate a webpage of team members.",
          "key": "team-profile",
          "imageSrc": teamProfile,
          "repository": "https://github.com/strossouw/Generate-Team-Profile"
        },

    ]
        return(
          <div>
       <Jumbotron fluid className="shadow p-5 mb-5">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Projects </h1>
            <h2>Deployed URL and Repositories </h2>
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