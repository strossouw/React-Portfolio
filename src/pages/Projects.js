import React from 'react';
import Project from '../components/Project';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './stylesheet.css'


import PWA from '../assets/images/Jate.jpg';
import TeamProfile from '../assets/images/TeamProfile.jpg';
import teamDB from '../assets/images/teamDB.jpg';
import MVC from '../assets/images/MVC.jpg';
import quiz from '../assets/images/quiz.jpg';
import sinato from '../assets/images/sinato.jpg';


function Projects() {
    const projects = [
      {
        "title": "Sinato",
        "desc": "This application is a social media site for music. Users can post about what song they're listening to and a caption on their thoughts. Others can add to the conversation by posting comments and using emojis. Made with Express servers and sessions, this is a great place for music lovers!",
        "key": "sinato",
        "imageSrc":sinato,
        "repository": "https://github.com/strossouw/sinato",
        "appURL": "https://sinato.herokuapp.com/"
      },     
      {
        "title": "MVC Tech Blog",
        "desc": "The basis of the project is to create a Progression Web App that can edit and store JavaScript text. The Application is also available offline.",
        "key": "text-editor",
        "imageSrc":MVC,
        "repository": "https://github.com/strossouw/MVC-Tech-Blog",
        "appURL": "https://dry-woodland-00667.herokuapp.com/"
      },   
      {
          "title": "PWA Text Editor",
          "desc": "The basis of the project is to create a Progression Web App that can edit and store JavaScript text. The Application is also available offline.",
          "key": "text-editor",
          "imageSrc":PWA,
          "repository": "https://github.com/strossouw/PWA-Text-Editor",
          "appURL": "https://ancient-basin-44560.herokuapp.com/"
        },
        {
          "title": "Generate Team Profile",
          "desc": "This project is a node.js application. It will take user inputs to generate a webpage of team members.",
          "key": "team-generate",
          "imageSrc":TeamProfile,
          "repository": "https://github.com/strossouw/Generate-Team-Profile",
          "appURL": "https://github.com/strossouw/Generate-Team-Profile"
        },
        {
          "title": "Team Database",
          "desc": "This project is a database application that will store and display data for employees. It will story the departments, roles, salaries, employees, and managers in the database. Within this application there is also functionality to add to each of those items.",
          "key": "team-database",
          "imageSrc":teamDB,
          "repository": "https://github.com/strossouw/Team-Database",
          "appURL": "https://github.com/strossouw/Team-Database"
        },
        {
          "title": "javascript quiz",
          "desc": "This is a simple javascript quiz. The webpage will display a question and possible answers and start the timer. At the end of the quiz High Scores are tallies and stored in local storage.",
          "key": "javascript-quiz",
          "imageSrc":quiz,
          "repository": "https://github.com/strossouw/javascript-quiz",
          "appURL": "https://strossouw.github.io/javascript-quiz/"
        }
    
    ]
        return(
          <div>
       <Jumbotron fluid className="shadow p-5 mb-5">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 style = {{ backgroundColor: "gray", color: "#90ee90" }}>Projects </h1>
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