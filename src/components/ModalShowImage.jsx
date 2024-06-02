import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";

import { getImages } from "../store/actions/imagesActions";

export default function ModalShowImage(props) {
  return (
    <div>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            <p>{props.name}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={12}>
                <img src={props.mainImg} alt="" className="img-thumbnail center rounded mx-auto d-block" />
              </Col>
            </Row>
            <br></br>
            <Row>
              {props.images.map((el) => {
                return (
                  <Col xs={6} md={4}>
                    <img src={el.imgUrl} alt="" className="img-thumbnail center rounded mx-auto d-block" />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
