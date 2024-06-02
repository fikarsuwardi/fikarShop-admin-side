import React from 'react'
import { Navigate } from 'react-router-dom'
import Categories from '../views/Categories'

export default function ProtectedRouteCategory() {
    if (!localStorage.getItem("access_token")) return <Navigate to='/login' />
    return <Categories />
}