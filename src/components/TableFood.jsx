import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ButtonEditProduct from "./ButtonEditProduct";
import ButtonShowImage from "./ButtonShowImage";
import {
  getListProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  detailProduct
} from "../store/actions/productActions";

export default function TableFood() {
  const {
    getListProductResult,
    getListProductLoading,
    getListProductError,
    addProductResult,
    deleteProductResult
  } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  useEffect(() => {
    if (addProductResult) {
      dispatch(getListProduct());
    }
  }, [addProductResult, dispatch]);

  useEffect(() => {
    if (deleteProductResult) {
      dispatch(getListProduct());
    }
  }, [deleteProductResult, dispatch]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>CREATED BY</th>
            <th>MAIN IMAGE</th>
            <th>IMAGES</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {getListProductResult ? (
            getListProductResult.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.categoryId}</td>
                  <td>{el.price}</td>
                  <td>{el.authorId}</td>
                  <td>
                    <img src={el.mainImg} className="h-50 w-50 center rounded mx-auto d-block"></img>
                  </td>
                  <td>
                    <ButtonShowImage name={el.name} mainImg={el.mainImg} images={el.Images}/>
                  </td>
                  <td>
                    <ButtonEditProduct id={el.id} />
                    <button className="btn btn-danger" onClick={() => dispatch(deleteProduct(el.id))}>Delete</button>
                  </td>
                </tr>
              );
            })
          ) : getListProductLoading ? (
            <p>Loading ...</p>
          ) : (
            <p>{getListProductError ? getListProductError : "Data Kosong"}</p>
          )}

          {/* {props.listProduct.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.categoryId}</td>
                <td>{product.price}</td>
                <td>{product.authorId}</td>
                <td>
                  <img src={product.mainImg} className="img-thumbnail"></img>
                </td>
                <td>
                  <ButtonShowImage
                    name={product.name}
                    image={product.mainImg}
                    showImage={props.showImage}
                    id={product.id}
                  />
                </td>
                <td>
                  <ButtonEditProduct
                    editData={props.editData}
                    id={product.id}
                  />
                  <button
                    className="btn btn-danger"
                    onClick={() => props.deleteData(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </Table>
    </div>
  );
}
