import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";


export default function ClassPage(props) {
  return (
    <Container>
      <Row>
        <Col>
        <Judul />
        <Video/>
      <Deskripsi />
        <Like />
        <Comment />
        <ClassRegister />
        </Col>
      </Row>

    </Container>
  );
}

function Judul() {
  return <h2>Kursus Investasi untuk Pemula</h2>;
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

