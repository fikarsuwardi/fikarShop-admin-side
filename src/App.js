import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import Home from "./views/Home";
import Categories from "./views/Categories.jsx";
import { Route, Routes } from "react-router-dom";
import ProtectedRouteHome from "./components/ProtectedRouteHome";
import ProtectedLogin from "./components/ProtectedLogin.jsx";
import ProtectedRouteCategory from "./components/ProtectedRouteCategory";
import ProtectedRouteRegister from "./components/ProtectedRouteRegister";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouteHome>
              <Home />
            </ProtectedRouteHome>
          }
        />
        <Route
          path="/categories"
          element={
            <ProtectedRouteCategory>
              <Categories />
            </ProtectedRouteCategory>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRouteRegister>
              <Register />
            </ProtectedRouteRegister>
          }
        />

        <Route
          path="/login"
          element={
            <ProtectedLogin>
              <Login />
            </ProtectedLogin>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
