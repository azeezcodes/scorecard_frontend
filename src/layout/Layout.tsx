import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Change } from '../pages/Change_password/Change'
import CreateAdmin from '../pages/Create-admin/CreateAdmin'
import { CreateUser } from '../pages/Create_user/Create_user'
import { Forget } from '../pages/Forget/Forget'
import { Login } from '../pages/Login/Login'
import { Reset } from '../pages/Reset_password/Reset'
import { Signup } from '../pages/SignUp/Signup'



export const Layout = () => {
  return (
     <Routes>
       
        <Route path="/" element={<Forget />} />
        <Route path="/reset-password/:id/:token" element={<Reset />} />
        <Route path="/update-password" element={<Change />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path = "/create-admin" element={<CreateAdmin />} />
        <Route path = "/createuser" element={<CreateUser />} />
     </Routes>
  );
}