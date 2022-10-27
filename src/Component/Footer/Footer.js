import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" container-fluid bg-primary mt-5">
      <div className="  p-5 text-light container">
        <h3> Grow your career</h3>
        <h4> Start Learning With FOYSAL AHAMED Academy</h4>
        <Button variant="light">
          {" "}
          <Link
            className=" text-primary fs-5  text-decoration-none text-uppercase"
            to="/"
          >
            {" "}
            Our Course{" "}
          </Link>{" "}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
