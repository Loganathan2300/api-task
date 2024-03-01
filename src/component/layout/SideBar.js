import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "../../utils/Sidebar.css";
const SideBar = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [activeSection, setActiveSection] = useState("dashboard-page");
  const getValue = () => {
    axios
      .get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };
  useEffect(() => {
    getValue();
  }, []);
  const handleCheckboxChange = (e) => {
    Navigate(`/name-page/${e}`);
  };
  const handleCheckboxEmail = (e) => {
    Navigate(`/email-page/${e}`);
  };
  const handleReset = () => {
    setActiveSection("dashboard-page");
    Navigate('/dashboard-page');
  };

  return (
    <div className="vh-100 ">
      <Accordion>
        <Accordion.Item eventKey="0" className="border-0">
          <p
            className={`${
              activeSection === "dashboard-page" ? "bg-light" : "bg-light"
            } py-3 pb-2 m-0`}
          >
            <Link
              to="dashboard-page"
              className="text-decoration-none px-3 text-dark point"
              onClick={() => {
                setActiveSection("dashboard-page");
              }}
            >
              DashBoard
            </Link>
          </p>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="border-0 ">
          <Accordion.Header
            onClick={() => setActiveSection("name-page")}
            className="bg-light"
          >
            Name
          </Accordion.Header>
          <Accordion.Body className="p-0 m-0">
            {user.length &&
              user.map((u, id) => (
                <p className="ms-3 mb-1 mt-1" key={id}>
                  <input
                    type="radio"
                    id={id}
                    className="me-1"
                    name="name"
                    onChange={() => handleCheckboxChange(u.id)}
                  />
                  <span className="fs">{u.name}</span>
                </p>
              ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="border-0">
          <Accordion.Header>Email</Accordion.Header>
          <Accordion.Body>
            {user.length &&
              user.map((u, id) => (
                <p key={id}>
                  <input
                    type="radio"
                    className="me-1"
                    name="email"
                    onChange={() => handleCheckboxEmail(u.id)}
                  />
                  <span className="fs">{u.email}</span>
                </p>
              ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="row">
        <div className="col-2">
          <button
            className="btn btn-danger point mx-2 "
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
