import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'; // Fix typo: Naviate → Navigate
import Login from "../pages/Login";
import PublicLayout from "../layout/PublicLayout";
import Register from "../pages/Register";
import Home from "../pages/Home";

function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default PublicRoutes;