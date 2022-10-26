import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";

const CatagoryDetails = () => {
  const { img, title, price, details } = useLoaderData();
  return (
    <div>
      <Card className="text-center">
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Image src={img}></Image>
          <Card.Title> {title} </Card.Title>
          <Card.Text> {details} </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <Card.Footer className="text-muted"> ${price} </Card.Footer>
      </Card>
    </div>
  );
};

export default CatagoryDetails;
