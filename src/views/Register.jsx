import React, { useState, useEffect } from "react";

import { Col, Row, Form, Button } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";

import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../store/actions/usersActions";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const { addUserResult } = useSelector((state) => state.usersReducer);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    console.log("submit", event);
    event.preventDefault();
    dispatch(
      RegisterUser({
        username: username,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address,
      })
    );
  };

  useEffect(() => {
    if (addUserResult) {;
      setUsername('')
      setEmail('')
      setPassword('')
      setPhoneNumber('')
      setAddress('')
    }
  }, [addUserResult, dispatch]);

  return (
    <div>
      <NavbarComponent />
      <div className="container mt-4">
        <Row>
          <Col>
            <h4>Register New Admin</h4>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
