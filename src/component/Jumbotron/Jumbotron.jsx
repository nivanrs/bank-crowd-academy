import { Col, Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";

export default function Banner(props) {
  return (
    <Jumbotron fluid>
      <Container>
      <Row>
        <Col>
        <h1>Mari Belajar</h1>
        <h2>Dunia Perbankan yang seru menunggu anda</h2>
        <br></br>
        <Button variant="primary" type="submit">
          Daftar
        </Button>
        </Col>
        <Col>
        <Image src="./assets/girl.png"/>
        </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
