import React from "react";
//import { useCookies } from 'react-cookie';
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  if (Cookies.get("userName") === undefined) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
