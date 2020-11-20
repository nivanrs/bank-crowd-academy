import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function CoursePage(props) {
  return (
    <Container>
      <Judul />
      <Kategori />
      <Pengajar />
      <Deskripsi />
      <ClassCards />
        <Like />
        <Comment />
    </Container>
  );
}

function Judul() {
  return <h2>Kursus Investasi untuk Pemula</h2>;
}

function Kategori() {
  return <h5>Investasi</h5>;
}

function Pengajar() {
    return <h5>BNI Sekuritas</h5>;
  }

function Deskripsi() {
  return <p>Course ini merupakan</p>;
}

function ClassCards() {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Pemula</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Menengah</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Mahir</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

function Like() {
    return (
    <p>jumlah like:</p>
    );
  }

  function Comment() {
    return <p>Komentar</p>;
  }
  

