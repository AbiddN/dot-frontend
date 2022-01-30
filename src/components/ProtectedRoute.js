import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: RouteComponent }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  return user ? <RouteComponent /> : <Navigate to="/signin" />;
};

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const user = JSON.parse(localStorage.getItem("user")) || null;

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (user) {
//           return <Component {...rest} {...props} />;
//         } else {
//           return (
//             <Navigate
//               to={{
//                 pathname: "/",
//                 state: {
//                   from: props.location,
//                 },
//               }}
//             ></Navigate>
//           );
//         }
//       }}
//     ></Route>
//   );
// };

export default ProtectedRoute;
