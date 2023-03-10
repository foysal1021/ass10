import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Catagory from "../../Component/LeftsideNav/Catagory";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col className=" col-12 col-lg-3">
            <Catagory></Catagory>
          </Col>

          <Col className=" col-12 col-lg-9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
