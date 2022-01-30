import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: RouteComponent }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  return user ? <RouteComponent /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
