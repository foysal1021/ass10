import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Register = () => {
  const { userRegister, userVerifi, userProfileUpdated } =
    useContext(AuthContext);

  const register = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // user create start
    userRegister(email, password)
      .then((regult) => {
        const User = regult.user;
        console.log(User);
        // verifi user
        userVerifi()
          .then(() => {
            toast.success("verifi your email!");
          })
          .catch();
        // verifi user end

        // updated profile name img start
        updated(name, photoURL);
        // updated profile name img start
      })
      .catch((error) => console.error(error));
  }; // user create end

  const updated = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    userProfileUpdated(profile)
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div>
      <Form onSubmit={register} className=" bg-info p-3 mt-3 rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label> Full Name </Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Full Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label> Photo URL </Form.Label>
          <Form.Control
            required
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
            required
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <Toaster />
    </div>
  );
};

export default Register;
