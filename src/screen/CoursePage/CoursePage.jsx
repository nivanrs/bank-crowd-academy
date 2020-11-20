import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, CardDeck, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function CoursePage(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Judul />
          <Kategori />
          <Pengajar />
          <Video />
          <Deskripsi />
          <ClassCards />
          <Like />
          <Comment />
        </Col>
      </Row>
    </Container>
  );
}

function Judul() {
  return <h2>Kursus Investasi untuk Pemula</h2>;
}

function Kategori() {
  return <h5>Kategori: Investasi</h5>;
}

function Pengajar() {
  return <h5>Pengajar: BNI Sekuritas</h5>;
}

function Video() {
  return <ReactPlayer url="https://youtu.be/YhPCgdWoYrwU" />;
}

function Deskripsi() {
  return (
    <div>
      <h5>Deskripsi:</h5>
      <p>Kursus ini merupakan kursus yang mempelajari investasi untuk pemula</p>
    </div>
  );
}

function ClassCards() {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Fundamental</Card.Title>
          <Card.Text>Dasar dari invesasi.</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Menengah</Card.Title>
          <Card.Text>Teknik untuk investasi.</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Mahir</Card.Title>
          <Card.Text>Pengetahuan investasi level Mahir.</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

function Like() {
  return <p>jumlah like:</p>;
}

function Comment() {
  return <p>Komentar</p>;
}
