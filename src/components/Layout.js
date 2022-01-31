import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

// const Layout = ({ children }) => {
//   return (
//     <React.Fragment>
//       <Header />
//       <div className="main">
//         <div className="main-navbar">
//           <Navbar />
//         </div>
//         <div className="main-content">{children}</div>
//         <div className="main-friend"></div>
//       </div>
//     </React.Fragment>
//   );
// };

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="main-navbar">
          <Navbar />
        </div>
        <div className="main-content">
          <Outlet></Outlet>
        </div>
        <div className="main-friend"></div>
      </div>
    </div>
  );
};

export default Layout;
