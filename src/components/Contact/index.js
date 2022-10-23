import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;


  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  
  console.log(formState);
  return (
    <div>
    <Jumbotron fluid className="shadow p-5 mb-5">
    <Container className="text-center">
      <div className="p-md-5">
        <h1>Contact Me</h1>
        
      </div>
    </Container>
    <Container className="text-center">

    <form id="contact-form" onSubmit={handleSubmit}>
        {""}
        <Row>
        <Col>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
        </div>
        
        {""}
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
        </div>
        </Col>
        {""}
        <div>
          <label htmlFor="message">Message: </label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
            {""}
            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
        </Row>
        <button type="submit">Submit</button>
        
      </form>

    </Container>
  </Jumbotron>
    </div>
  );
}

export default ContactForm;
