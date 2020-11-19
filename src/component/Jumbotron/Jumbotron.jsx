import { Col, Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import bannerImg from "../../assets/girl.png";


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
        <Container>
        <img 
        src={bannerImg} alt="study"
        height="250"
      width="250"
      className="rounded-circle"
        />
        </Container>
        </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
