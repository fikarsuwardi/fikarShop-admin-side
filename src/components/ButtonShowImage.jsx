import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ModalShowImage from './ModalShowImage';

export default function ButtonShowImage(props) {
  const [modalShow, setModalShow] = useState(false);
  const clickShowImages = (id) => {
    setModalShow(true)
  };

  return (
    <div>
      <Button variant="primary" onClick={() => clickShowImages(props.id)}>
        Show Images
      </Button>

      <ModalShowImage
      images={props.images}
      mainImg={props.mainImg} 
      name={props.name}
      show={modalShow} onHide={() => setModalShow(false)}
      />
    </div>
  );
}
