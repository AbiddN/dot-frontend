import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: RouteComponent }) => {
  const user = localStorage.getItem("token");
  return user ? <RouteComponent /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
