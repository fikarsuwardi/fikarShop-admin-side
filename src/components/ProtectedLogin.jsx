import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from "../views/Login"

export default function ProtectedLogin() {
    if (localStorage.getItem("access_token")) return <Navigate to='/' />
    return <Login />
} 