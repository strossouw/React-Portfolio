import React from 'react'
import SocialIcons from '../SocialIcons'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {


    return (
        <footer class="shadow footer">
            <Container>
                <Row>
                    <Col sm={12} md={6} className="m-md-0">
                    <p>Stephanie Rossouw 🐈🐈  2022</p>
                    </Col>
                    <Col sm={12} md={6} className="d-flex justify-content-md-end justify-content-center">
                    <SocialIcons />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;