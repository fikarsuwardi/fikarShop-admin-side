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
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="my-2 my-lg-0" navbarScroll>
            <Nav.Item>
              <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/register">Register New Admin</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button onClick={(event) => logout(event)} variant="outline-danger">
                Sign Out
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
