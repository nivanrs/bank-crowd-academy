import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


export default function Register(props) {
  return (
    <Container fluid="md">
  <Row>
    <Col>
    <Form>
    <Form.Group controlId="formBasicUsernamel">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Masukkan Username" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Masukkan Email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Massukan Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Daftar
      </Button>
    </Form>
    </Col>
  </Row>
</Container>
  );
}