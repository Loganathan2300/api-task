import React from "react";
import Sidebar from "./component/layout/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 p-0 vh-100 bg-light">
          <Sidebar />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
