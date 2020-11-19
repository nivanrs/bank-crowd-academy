import React from 'react';
import axios from 'axios';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(`http://localhost:9000/api/login`, user, {headers: {"Content-Type" : "application/json"}})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <Container>
        <h2>MASUK</h2>
        <hr />
        <br/>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Masukkan Email" name="email" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Masukkan Password" name="password" onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Masuk
          </Button>
        </Form>
      </Container>
    )
  }
}