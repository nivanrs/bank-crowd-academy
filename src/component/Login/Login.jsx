import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function Login(props) {
  return (
    <Container>
    <h2>MASUK</h2>
    <hr />
    <br/>

    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Masukkan Email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Massukan Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Masuk
      </Button>
    </Form>
</Container>
  );
}