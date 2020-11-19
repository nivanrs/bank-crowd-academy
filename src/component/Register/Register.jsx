import React from 'react';
import axios from 'axios';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.role = React.createRef();
    this.isVerified = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      role: this.role.current.value,
      isVerified: this.isVerified.current.value
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
            <Form.Control type="hidden" value="1" ref={this.role} />
            <Form.Control type="hidden" value="false" ref={this.isVerified} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Daftar
          </Button>
        </Form>
      </Container>
    )
  }
  
}