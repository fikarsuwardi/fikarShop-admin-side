import React, { useState, useEffect } from "react";
import ButtonCreateProduct from "../components/ButtonCreateProduct";
import { useNavigate } from "react-router-dom";

import TableFood from "../components/TableFood";
import NavbarComponent from "../components/NavbarComponent"

export default function Home() {
  // diclient unuk detail product
  const navigate  = useNavigate()
  return (
    <div>
      <NavbarComponent />
      <div className="container mt-4">
        <div className="container mt-4">
          <h1>Product List</h1>
          <ButtonCreateProduct/>
        </div>  
          <TableFood />
      </div>
    </div>
  );
}
