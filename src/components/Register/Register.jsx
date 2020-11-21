import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
      <Container style={{display: 'flex', justifyContent: 'center'}}>
        <Card className="my-4" border="info" style={{ width: '40rem' }}>
          <Card.Header className="text-center" style={{background: "#3498DB", color: "#FFFFFF"}}>Registrasi</Card.Header>
          <Card.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Nama</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Masukkan Nama Depan" name="FirstName" onChange={this.handleChange} />
                </Col>
                <Col>
                <Form.Control type="text" placeholder="Masukkan Nama Belakang" name="LastName" onChange={this.handleChange} />
                </Col>
              </Row>
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
              <Form.Label>Pilih Jenis Akun</Form.Label>
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
            <p className="my-2">Sudah Memiliki akun? <a href='/login'>Masuk</a></p>
          </Card.Body>
        </Card>
      </Container>
    )
  }
  
}