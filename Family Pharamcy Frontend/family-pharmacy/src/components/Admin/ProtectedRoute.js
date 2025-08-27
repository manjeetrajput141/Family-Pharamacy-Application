// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   return isAdmin ? children : <Navigate to="/admin/login" replace />;
// };

// export default ProtectedRoute;
// import { Navigate } from "react-router-dom";
// import { isLoggedIn } from "./auth";

// export default function ProtectedRoute({ children }) {
//   return isLoggedIn() ? children : <Navigate to="/login" replace />;
// }

import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./auth";
import getUserRole from "./auth";

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  // const role = getUserRole();
  // if (role !== "ROLE_ADMIN") {
  //   console.log("User role:", role);
  //   console.log("Not an admin, redirecting to login");
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};

export default ProtectedRoute;





