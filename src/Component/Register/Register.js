import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  const register = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    console.log(email, name, photoURL, password);
  };

  return (
    <div>
      <Form onSubmit={register} className=" bg-info p-3 mt-3 rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label> Full Name </Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label> Photo URL </Form.Label>
          <Form.Control
            name="photoURL"
            type="text"
            placeholder="Enter Photo URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
