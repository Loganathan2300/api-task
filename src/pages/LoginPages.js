import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import React, { useState} from "react";
import axios from "axios";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://6da5-2405-201-e059-b805-e5d0-6c8c-c766-33be.ngrok-free.app/api/v1/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response);
      if (response.status === 200) {
        setLoggedIn(true);
        navigate("/home/dashboard-page");
        localStorage.setItem("token",response.data.token)

      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login. Please try again.");
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card m-5 p-5">
          {loggedIn ? (
            <div>
              <h2>Welcome, {email}!</h2>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <h2>Login</h2>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={handleLogin}
                  className="mt-3"
                >
                  Login
                </Button>
              </Form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
