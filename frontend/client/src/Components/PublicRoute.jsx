import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const PublicRoute = ({ children }) => {
  // const {token} = useAuth();
  
    const token = useAuthStore((state) => state.token)


  if (token) {
   console.log("public route",token);
    
    return <Navigate to="/" />;
  }
 console.log("public route outside",token);
  return children;
};

export default PublicRoute;
