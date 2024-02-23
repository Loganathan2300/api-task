import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="vh-100 bg-secondary text-white py-3">
      <div className="row">
        <div className="col-6">
          <p className="mx-2">Filter</p>
        </div>
        <div className="col-6">
          <p className="mx-3">
            Favorite
          </p>
        </div>
        <hr />
      </div>
      <li>
        <Link to="dashboard-page">DashBoard</Link>
      </li>
      <li>
        <Link to="name-page">Name</Link>
      </li>
    </div>
  );
};

export default SideBar;
