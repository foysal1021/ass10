import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "./Login.css";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const { userSinging, GoogleSINGIN } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const login = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // singing with email password
    // singing with email password
    userSinging(email, password)
      .then((regult) => {
        const user = regult.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const google = () => {
    GoogleSINGIN(googleProvider);
  };

  return (
    <div>
      <Form onSubmit={login} className=" p-5 form-style mt-3 rounded-4">
        <h2 className=" text-center text-primary fw-bolder"> Login Here </h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Email address </Form.Label>{" "}
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Password </Form.Label>{" "}
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <span>
          <Form.Label> Are you new here? </Form.Label>{" "}
          <Link
            to="/register"
            className=" text-decoration-none fw-bold text-success"
          >
            {" "}
            Register{" "}
          </Link>
        </span>{" "}
        <br></br>
        <Button variant="primary" type="submit" className=" px-5 py-2 fs-5">
          Login{" "}
        </Button>{" "}
        <div className=" text-center mt-5 ">
          <button className=" w-50 mb-3 py-3 fs-5 googleLogin" onClick={google}>
            <FaGoogle className=" fs-2 text-warning me-2"></FaGoogle>Singin with
            Google{" "}
          </button>{" "}
          <br></br>
          <button className=" w-50 py-3 fs-5 githubLogin"> Github </button>
        </div>
      </Form>{" "}
    </div>
  );
};

export default Login;
