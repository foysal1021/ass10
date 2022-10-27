import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button, Image } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const allCourse = useLoaderData();
  // console.log(allCourse);
  return (
    <div className="ok">
      <div className=" row mt-4 ">
        {allCourse.map((course) => (
          <div className=" col-12 col-lg-4 mb-5">
            <Card className=" h-100 text-center">
              <Card.Header className=" bg-primary p-4">
                <Image src={course.img} className="w-100 rounded"></Image>
              </Card.Header>

              <Card.Body>
                <Card.Title> {course.title} </Card.Title>
                <Card.Text> {course.details} </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div>
                  {" "}
                  <Button className=" bg-primary t">
                    {" "}
                    <Link className=" text-decoration-none text-light">
                      {" "}
                      Buy Now{" "}
                    </Link>
                  </Button>
                </div>
                <div>
                  {" "}
                  <span> ${course.price}</span>{" "}
                </div>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
