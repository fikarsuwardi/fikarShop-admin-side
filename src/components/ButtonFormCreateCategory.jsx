import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  getListCategory,
} from "../store/actions/categoriesAction";

export default function ButtonFormCreateCategory() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");

  const { addCategoryResult } = useSelector((state) => state.categoriesReducer);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCategory({ name: name }));
  };

  useEffect(() => {
    if (addCategoryResult) {
      dispatch(getListCategory());
      setName("");
    }
  }, [addCategoryResult, dispatch]);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Create Category
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group className="mb-3">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <hr></hr>
    </div>
  );
}
