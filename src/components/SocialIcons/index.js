import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function SocialIcons() {
    const social = [
    {
        "name":"Github",
        "url":"https://github.com/strossouw",
        "class":"fa-github",
    },
    {
        "name":"Email",
        "url":"mailto:srossouw@uwm.edu",
        "class":"fa-email"
    }
    ]
    return (
      <div>
          <Col>
              <Container>
              <span><a href="https://github.com/strossouw"><i className="fab fa-github pr-4"></i></a></span>
              <span><a href="mailto:srossouw@uwm.edu"><i className="far fa-envelope pr-4"></i></a></span> 
              </Container>
            </Col>
          </div>

    )
}
export default SocialIcons