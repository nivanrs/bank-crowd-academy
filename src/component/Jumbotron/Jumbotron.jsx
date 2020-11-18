import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Banner(props) {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Mari Belajar</h1>
        <h2>Dunia Perbankan yang seru menunggu anda</h2>
        <br></br>
        <Button variant="primary" type="submit">
          Daftar
        </Button>
      </Container>
    </Jumbotron>
  );
}
