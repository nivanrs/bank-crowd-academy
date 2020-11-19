import React from 'react';
import axios from 'axios';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      LastName: '',
      email: '',
      password: '',
      role: '',
    }
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
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
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
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Masukkan First Name" name="FirstName" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Last Name" name="LastName" onChange={this.handleChange} />
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
            <Form.Label>Pilih Kebutuhan Akun</Form.Label>
            <Form.Control as="select" name="role" onChange={this.handleChange}>
              <option value="1">Pengajar</option>
              <option value="2">Pelajar</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
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