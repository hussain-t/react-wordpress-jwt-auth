import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class LoginForm extends Component {
  render() {
    return (
      <div className="login-container">
        <Form>
          <h1>React WordPress JWT Auth</h1>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username / Email" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    )
  }
}

export default LoginForm;
