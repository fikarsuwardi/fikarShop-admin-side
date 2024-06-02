import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  getListProduct,
  updateProduct,
} from "../store/actions/productActions";

export default function FormAddEditProduct(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [mainImg, setMainImg] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [imgUrl1, setImgUrl1] = useState("");
  const [imgUrl2, setImgUrl2] = useState("");
  const [imgUrl3, setImgUrl3] = useState("");
  const [id, setId] = useState("");

  const { addProductResult, detailProductResult, updateProductResult } =
    useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    console.log("tess", props.id);
    event.preventDefault();
    if (props.id) {
      dispatch(
        updateProduct({
          id: props.id,
          name: name,
          description: description,
          price: price,
          mainImg: mainImg,
          categoryId: +categoryId,
          imgUrl1: imgUrl1,
          imgUrl2: imgUrl2,
          imgUrl3: imgUrl3,
        })
      );
    } else {
      dispatch(
        addProduct({
          name: name,
          description: description,
          price: price,
          mainImg: mainImg,
          categoryId: +categoryId,
          imgUrl1: imgUrl1,
          imgUrl2: imgUrl2,
          imgUrl3: imgUrl3,
        })
      );
    }
  };

  useEffect(() => {
    if (detailProductResult) {
      setId(detailProductResult.id);
      setName(detailProductResult.name);
      setDescription(detailProductResult.description);
      setPrice(detailProductResult.price);
      setMainImg(detailProductResult.mainImg);
      setCategoryId(detailProductResult.categoryId);
      setImgUrl1(detailProductResult.imgUrl1);
      setImgUrl2(detailProductResult.imgUrl2);
      setImgUrl3(detailProductResult.imgUrl3);
    }
  }, [detailProductResult, dispatch]);

  useEffect(() => {
    if (updateProductResult) {
      dispatch(getListProduct());
      setId('')
      setName('')
      setDescription('')
      setPrice('')
      setMainImg('')
      setCategoryId('')
      setImgUrl1('')
      setImgUrl2('')
      setImgUrl3('')
    }
  }, [updateProductResult, dispatch]);

  return (
    <div>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>
            {props.id ? "Edit Product" : "Create Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="number"
                name="categoryId"
                value={categoryId}
                onChange={(event) => setCategoryId(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                name="mainImg"
                value={mainImg}
                onChange={(event) => setMainImg(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Additional Image 1</Form.Label>
              <Form.Control
                type="text"
                name="imgUrl1"
                value={imgUrl1}
                onChange={(event) => setImgUrl1(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Additional Image 2</Form.Label>
              <Form.Control
                type="text"
                name="imgUrl2"
                value={imgUrl2}
                onChange={(event) => setImgUrl2(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Additional Image 3</Form.Label>
              <Form.Control
                type="text"
                name="imgUrl3"
                value={imgUrl3}
                onChange={(event) => setImgUrl3(event.target.value)}
              />
            </Form.Group>
            <Button onClick={props.onHide} type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
