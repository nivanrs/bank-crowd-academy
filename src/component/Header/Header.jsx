import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import React from "react";
import { Button } from "react-bootstrap";

export default function Header(props) {
  return (
    <header>
      <Navbar style={navbar} sticky="top">
        {" "}
        {/*Supaya fix di atas*/}
        <Navbar.Brand href="#home" style={{ color: "#1A73A3" }}>
          Bank Crowd Academy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="" style={{ color: "#1A73A3" }}>
              Home
            </Nav.Link>
            <NavDropdown
              title="Tren"
              id="basic-nav-dropdown"
              style={{ color: "#1A73A3" }}
            >
              <NavDropdown.Item href="#action/3.1">
                Kursus Paling Top
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Kelas Paling Top
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Pengajar Paling Top
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Tren"
              id="basic-nav-dropdown"
              style={{ color: "#1A73A3" }}
            >
              <NavDropdown.Item href="#action/3.1">
                Kursus Paling Top
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Kelas Paling Top
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Pengajar Paling Top
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-4" />
            <Button variant="light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
const navbar = { backgroundColor: "#80C9F0" };
