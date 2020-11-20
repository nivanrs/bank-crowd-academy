import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";


export default function ClassPage(props) {
  return (
    <Container>
      <Judul />
      <Deskripsi />
        <Like />
        <Comment />
        <ClassRegister />
    </Container>
  );
}

function Judul() {
  return <h2>Kursus Investasi untuk Pemula</h2>;
}

function Deskripsi() {
  return <p>Course ini merupakan</p>;
}

function Like() {
    return (
    <p>jumlah like:</p>
    );
  }

  function Comment() {
    return <p>Komentar</p>;
  }
  
  function ClassRegister() {
    return (<Button variant="primary">Daftar Kelas</Button>);
  }

