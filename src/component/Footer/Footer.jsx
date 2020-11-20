import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

import React from "react";

export default function Footer(props) {
  return (
    <footer>
      <Navbar fixed="bottom" style={navbar}>
        <Navbar.Brand href="#home" style={{ color: "#1A73A3" }}>
          @DTS-2020-FEBE UGM 04
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    </footer>
  );
}
const navbar = { backgroundColor: "#80C9F0" };
