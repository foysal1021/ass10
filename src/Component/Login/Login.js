import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { userSinging } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userSinging(email, password)
      .then((regult) => {
        const user = regult.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(email, password);
  };
  return (
    <div>
      <Form onSubmit={login} className=" p-3 bg-info mt-3 rounded">
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
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>{" "} */}
        <Button variant="primary" type="submit">
          Login{" "}
        </Button>{" "}
      </Form>{" "}
    </div>
  );
};

export default Login;
