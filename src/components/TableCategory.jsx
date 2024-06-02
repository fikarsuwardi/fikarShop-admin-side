import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getListCategory,
  deleteCategory,
} from "../store/actions/categoriesAction";

export default function TableCategory() {
  const {
    getListCategoryResult,
    getListCategoryLoading,
    getListCategoryError,
    deleteCategoryResult,
  } = useSelector((state) => state.categoriesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("444444444");
    dispatch(getListCategory());
  }, [dispatch]);

  useEffect(() => {
    if (deleteCategoryResult) {
      dispatch(getListCategory());
    }
  }, [deleteCategoryResult, dispatch]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CREATED AT</th>
            <th>UPDATED AT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {getListCategoryResult ? (
            getListCategoryResult.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.createdAt}</td>
                  <td>{el.updatedAt}</td>
                  <td>
                    <button onClick={() => dispatch(deleteCategory(el.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : getListCategoryLoading ? (
            <p>Loading ...</p>
          ) : (
            <p>{getListCategoryError ? getListCategoryError : "Data Kosong"}</p>
          )}
        </tbody>
      </Table>
    </div>
  );
}
