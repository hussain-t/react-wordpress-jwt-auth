import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import axios from "axios";

import { domain, API, endpoint } from '../config/app.json'

const AUTH_TOKEN = 'AUTH_TOKEN';

class LoginForm extends Component {
  state = {
    validate: false,
    loading: false,
    username: '',
    password: '',
    error: '',
  }

  handleLogin = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.setState({ loading: true, validate: true, error: false });
    axios.post(domain.env.stage + API.WP + API.JWT + endpoint.token, {
      username,
      password
    })
    .then(user => this.handleLoginSuccess(user))
    .catch(error => this.handleLoginFail(error))
  }

  handleLoginSuccess = user => {
    localStorage.setItem(AUTH_TOKEN, JSON.stringify(user));
    console.log('user', user)
    this.setState({
      validate: false,
      loading: false,
      username: '',
      password: '',
      error: ''
    });
    this.props.history.push('/profile');
  }

  handleLoginFail = error => {
    this.setState({ validate: true, loading: false, error: 'Invslid username / password' });
  }

  handleUsername = username => {
    this.setState({ username });
  }

  handlePassword = password => {
    this.setState({ password });
  }

  renderError() {
    if (this.state.error) {
      return (
        <Alert variant="danger">
          {this.state.error}
        </Alert>
      )
    } else if (this.state.loading) {
      return (
        <Alert variant="primary">
          Loading...
        </Alert>
      )
    }
  }

  render() {
    const { validate } = this.state;
    return (
      <div className="container">
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
            <Form.Control.Feedback type="invalid">Username cannot be empty!</Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid">Password cannot be empty!</Form.Control.Feedback>
          </Form.Group>
          {this.renderError()}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    )
  }
}

export default LoginForm;
