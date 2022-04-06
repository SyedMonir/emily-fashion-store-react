import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import './Contact.css';

const auth = getAuth(app);

const Contact = () => {
  const handleEmailBlur = (e) => {
    console.log(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    console.log(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(handleEmailBlur, handlePasswordBlur);
  };
  return (
    <Container className="registration">
      <h2 className="my-3">Please Register!</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button
          className="my-2 px-4 py-2 px-3 rounded text-uppercase border-0 text-white submit-btn"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
