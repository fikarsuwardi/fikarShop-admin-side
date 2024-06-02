import React from "react";
import { Table } from "react-bootstrap";
import ButtonFormCreateCategory from "../components/ButtonFormCreateCategory";
import NavbarComponent from "../components/NavbarComponent";
import TableCategory from "../components/TableCategory";

export default function Categories() {
  
  return (
    <div>
      <NavbarComponent />
      <div className="container mt-4">
        <div className="container mt-4">
          <h1>Category List</h1>
          <ButtonFormCreateCategory />
        </div>
        <TableCategory />
      </div>
    </div>
  );
}
