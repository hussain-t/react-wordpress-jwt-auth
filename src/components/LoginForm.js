import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from "axios";

import { domain, API, endpoint } from '../config/app.json'

class LoginForm extends Component {
  state = {
    validate: false,
    username: '',
    password: '',
    error: '',
  }

  handleLogin = event => {
    event.preventDefault();
    const { username, password } = this.state;
    axios.post(domain.env.stage + API.WP + API.JWT + endpoint.token, {
      username,
      password
    })
    .then(user => {
      console.log(user)
    })
    .catch(error => {
      console.error(error.response.data.message)
      this.setState({ validate: true, error: error.response.data.message });
    })
  }

  handleUsername = username => {
    this.setState({ username });
  }

  handlePassword = password => {
    this.setState({ password });
  }

  render() {
    const { validate } = this.state;
    return (
      <div className="login-container">
        <Form 
          method="POST" 
          noValidate
          validated={validate}
          onSubmit={this.handleLogin}
        >
          <h2>React WordPress JWT Auth</h2>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              required 
              placeholder="Username / Email"
              onChange={event => this.handleUsername(event.target.value)}
              value={this.state.username}
            />
            <Form.Control.Feedback type="invalid">{this.state.error}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              required 
              placeholder="Password"
              onChange={event => this.handlePassword(event.target.value)}
              value={this.state.password}
            />
            <Form.Control.Feedback type="invalid">{this.state.error}</Form.Control.Feedback>
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
