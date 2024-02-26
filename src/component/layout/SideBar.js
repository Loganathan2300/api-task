import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({user}) => {
  return (
    <div className="vh-100 bg-secondary text-white py-3">
      <div className="row">
        <div className="col-6">
          <p className="mx-2">Filter</p>
        </div>
        <div className="col-6">
          <p className="mx-3">Favorite</p>
        </div>
        <hr />
      </div>
      <ul className="list-unstyled">
      <li>
        <Link
          to="dashboard-page"
          className="text-decoration-none fs-5 text-white mx-2"
          style={{ cursor: "pointer" }}
          >
          DashBoard
        </Link>
      </li>
      <li>
        <Link
          to="name-page"
          className="text-decoration-none fs-5 text-white mx-2"
          style={{ cursor: "pointer",listStyleType: "none" }}
          >
          Name
        </Link>
      </li>
      <li>
        <Link
          to="email-page"
          className="text-decoration-none fs-5 text-white mx-2"
          style={{ cursor: "pointer",listStyleType: "none" }}
          >
          Email
        </Link>
      </li>
          </ul>
    </div>
  );
};

export default SideBar;
