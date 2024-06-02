import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [inputFormUser, setInputFormUser] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    const newInput = {
      ...inputFormUser,
    };
    newInput[e.target.name] = e.target.value;
    setInputFormUser(newInput);
  };
  const baseURL = "http://localhost:3001";
  // const baseURL = "https://fikarshop-server.herokuapp.com"
  
  const loginUser = (e) => {
    e.preventDefault();
    fetch(baseURL + "/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputFormUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Internal Server Error`);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputFormUser({
          email: "",
          password: "",
        });
      });
  };
  return (
    <div className="container mt-4">
      <Row>
        <Col>
          <h4>Sign In to Your Account</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={inputFormUser.email}
                onChange={handleInputChange}
                type="email"
                id="emaillc"
                name="email"
                className="form-control"
                placeholder="Email Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={inputFormUser.password}
                onChange={handleInputChange}
                type="password"
                id="passwordlc"
                name="password"
                className="form-control"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-dark"
              onClick={(e) => loginUser(e)}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
