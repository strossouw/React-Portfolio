import React from 'react';
import './stylesheet.css';

import Card from 'react-bootstrap/Card';

function Project({ project }) {
  return (
    <Card className="m-lg-4 m-2 d-flex justify-content-center">
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <a href={project.appURL} target="_blank" rel="noopener noreferrer">
              <h4>{project.title}</h4>
            </a>
            <a href={project.repository} target="_blank" rel="noopener noreferrer">
              <span><i className="fa fa-github"></i></span>
            </a>
          </Card.Title>
          <Card.Subtitle>
            {project.desc}
          </Card.Subtitle>
        <a href={project.appURL} target="_blank" rel="noopener noreferrer">
          <Card.Img src={project.imageSrc} className="pt-4"/>
        </a>
        </Card.Body>
    </Card>
  )
}

export default Project;