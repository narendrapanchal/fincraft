import Dashboard from "../pages/Dashboard";
import React, { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("../pages/Login"));

function AllRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Dashboard />} path="/"></Route>
          <Route element={<Login />} path="/login"></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default AllRoutes;
