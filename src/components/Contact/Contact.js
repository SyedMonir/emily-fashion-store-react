import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import app from '../../firebase.init';
import './Contact.css';

const auth = getAuth(app);

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [register, setRegister] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterChange = (e) => {
    setRegister(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setError('Enter data!');
      return;
    }
    // At least one special character
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError(' At least one special character');
      return;
    }

    setValidated(true);
    setError('');

    if (register) {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // Signed in
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          setError("Password didn't match!");
          // console.log(error);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // Signed up
          const user = result.user;
          console.log(user);
          setEmail('');
          setPassword('');
          verifyEmail();
          updateUserName();
        })
        .catch((error) => {
          // console.error(error);
          setError(error.message);
        });
    }

    // e.preventDefault();
  };

  const updateUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log('Profile updated!');
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password reset email sent!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log('Email verification sent!');
    });
  };
  return (
    <Container className="registration w-75 mx-auto">
      <h2 className="my-3 mx-auto text-center">
        Please {!register ? 'Register' : 'Sign in'} !
      </h2>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {!register && (
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              onBlur={handleNameBlur}
              type="text"
              required
              placeholder="Enter your name"
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            required
            placeholder="Enter email"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            required
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a password.
          </Form.Control.Feedback>
        </Form.Group>
        <p className="text-danger m-0 tex">
          <small>{error}</small>
        </p>
        <Form.Group className="my-2" controlId="formBasicCheckbox">
          <Form.Check
            onChange={handleRegisterChange}
            type="checkbox"
            label="Already have an account or registered?"
          />
        </Form.Group>
        <Button onClick={handlePasswordReset} variant={'link'}>
          Forget password?
        </Button>
        <Button
          className="my-3 px-4 py-2 px-3 rounded text-uppercase border-0 text-white submit-btn"
          type="submit"
        >
          {register ? 'Sign In' : 'Register'}
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
