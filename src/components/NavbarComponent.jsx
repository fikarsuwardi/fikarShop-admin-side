import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Button,
  Container,
  Nav,
} from "react-bootstrap";

export default function NavbarComponent() {

  const navigate = useNavigate()
  const logout = (event) => {
    event.preventDefault()
    localStorage.clear()
    navigate('/login')
}
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>FikarShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">
              <Link to="/">Dashboard</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/categories" className="Navbar">Categories</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/register">Register Admin</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Button onClick={(event) => logout(event)}>Sign Out</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
