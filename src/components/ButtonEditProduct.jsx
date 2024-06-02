import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FormAddEditProduct from "./FormAddEditProduct";
import { detailProduct } from "../store/actions/productActions";

export default function ButtonEditProduct(props) {
  const [modalShow, setModalShow] = useState(false);
  
  const dispatch = useDispatch();

  const clickEdit = () => {
    setModalShow(true)
    dispatch(detailProduct(props.id))
  };

  return (
    <div>
      <Button
        variant="warning"
        onClick={() => clickEdit(props.id)}
      >
        Edit
      </Button>

      <FormAddEditProduct
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={props.id}
      />
      <hr></hr>
    </div>
  );
}
