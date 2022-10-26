import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col className=' col-12 col-lg-4'>
                        <h1> left side nav</h1>
                    </Col>

                    <Col className=' col-12 col-lg-8'>
                    <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>


            <Footer></Footer>
        </div>
    );
};

export default Main;