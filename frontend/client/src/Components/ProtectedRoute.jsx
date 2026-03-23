import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ children, allowed }) => {


  // const {role,token} = useAuth();

  
    const token = useAuthStore((state) => state.token)
    const role = useAuthStore((state) => state.role)

  if (!token) {
    return <Navigate to="/restricted" />;
  }
  if (token && !allowed.includes(role)) {
    return <Navigate to="/restricted" />;
  }
  return children
};

export default ProtectedRoute;
