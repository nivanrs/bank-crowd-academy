import React from 'react';
import axios from 'axios';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    role: '',
    isVerified: '',
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const registration = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
      isVerified: this.state.isVerified
    };

    axios.post(`http://localhost:9000/api/registration/add`, registration, {headers: {"Content-Type" : "application/json"}})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <Container fluid="md">
        <h2>REGISTRASI</h2>
        <hr/>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Username" name="username" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukkan Email" name="email" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Masukkan Password" name="password" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Control type="hidden" value="1" name="role" onChange={this.handleChange} />
            <Form.Control type="hidden" value="false" name="isVerified" onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Daftar
          </Button>
        </Form>
      </Container>
    )
  }
  
}