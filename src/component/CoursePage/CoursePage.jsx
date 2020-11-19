import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Text } from "react"

export default function CoursePage(props) {
    return (
        <Container>
            <h1>Judul Course</h1>
            <h2>Kategori</h2>
            <h2>Pengajar</h2>
            <h2>Deskripsi</h2>
            <h2>Kelas</h2>

        </Container>        
    );
  }  