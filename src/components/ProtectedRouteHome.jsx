import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../views/Home'

export default function ProtectedRouteHome() {
    if (!localStorage.getItem("access_token")) return <Navigate to='/login' />
    return <Home/>
}