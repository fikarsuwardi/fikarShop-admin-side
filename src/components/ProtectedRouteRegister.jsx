import React from 'react'
import { Navigate } from 'react-router-dom'
import Register from '../views/Register'

export default function ProtectedRouteCategory() {
    if (!localStorage.getItem("access_token")) return <Navigate to='/login' />
    return <Register />
}