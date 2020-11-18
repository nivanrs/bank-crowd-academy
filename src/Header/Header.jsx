import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import React from 'react';
import {Button} from 'react-bootstrap';


export default function Header(props) {
  return(
    <header>
    <Navbar style={navbar}>
      <Navbar.Brand href="#home" style={{ color: '#80C9F0' }}>Bank Crowd Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
        <Nav.Link href="" style={{ color: '#80C9F0' }}>Home</Nav.Link>
      <Nav.Link href="#link" style={{ color: '#80C9F0' }}>Menu</Nav.Link>
      </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="dark">Search</Button>
    </Form>
     </Navbar.Collapse>
    </Navbar>
    </header>
  );
}
const navbar = {backgroundColor: '#80C9F0'};