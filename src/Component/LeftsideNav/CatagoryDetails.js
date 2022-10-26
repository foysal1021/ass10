import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button, Image } from "react-bootstrap";

const CatagoryDetails = () => {
  const { img, title, price, details } = useLoaderData();
  return (
    <div className=" w-50 mx-auto">
      <Card className="text-center">
        <Card.Header className=" bg-primary p-4">
          <Image src={img} className="w-100 rounded"></Image>
        </Card.Header>

        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text> {details} </Card.Text>
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
            <span> ${price}</span>{" "}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CatagoryDetails;

// <Card className=" h-100 text-center">
//   <Card.Header className=" bg-primary p-4">
//     <Image src={img} className="w-100 rounded"></Image>
//   </Card.Header>

//   <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
//     <div>
//       {" "}
//       <Button className=" bg-primary t">
//         {" "}
//         <Link className=" text-decoration-none text-light"> Buy Now </Link>
//       </Button>
//     </div>
//     <div>
//       {" "}
//       <span> ${course.price}</span>{" "}
//     </div>
//   </Card.Footer>
// </Card>;
