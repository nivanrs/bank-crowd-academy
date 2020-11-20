import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
      <Container style={{display: 'flex', justifyContent: 'center'}}>
        <Card className="my-4" border="info" style={{ width: '30rem' }}>
          <Card.Header className="text-center" style={{background: "#3498DB", color: "#FFFFFF"}}>Masuk</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Masukkan Email" name="email" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukkan Password" name="password" onChange={this.handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Masuk
              </Button>
            </Form>
            <p>Belum Memiliki akun? <a href='/register'>Daftar</a></p>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}