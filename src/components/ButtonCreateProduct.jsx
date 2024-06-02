import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import FormAddEditProduct from "./FormAddEditProduct";

export default function ButtonCreateProduct() {
  const [modalShow, setModalShow] = useState(false);
  const buttonAdd = () => {
    setModalShow(true)
  };
  return (
    <div>
      <Button variant="primary" onClick={() => buttonAdd()}>
        Create New Product
      </Button>

      <FormAddEditProduct show={modalShow} onHide={() => setModalShow(false)}/>
      <hr></hr>
    </div>
  );
}
