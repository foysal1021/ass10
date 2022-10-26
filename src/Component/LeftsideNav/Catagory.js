import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Catagory = () => {
  const [catagoris, setCotagoris] = useState([]);

  useEffect(() => {
    fetch("https://server-two-xi.vercel.app/course")
      .then((res) => res.json())
      .then((data) => setCotagoris(data));
  }, []);
  // console.log("ok", catagoris);

  return (
    <div>
      {catagoris.map((catagori) => (
        <div>
          <Button className=" btn-dark">
            {" "}
            <Link to={`/catagory/details/${catagori.id}`}>
              {" "}
              {catagori.catagory}{" "}
            </Link>
          </Button>
        </div>
      ))}
      <Button className=" btn-dark">
        {" "}
        <Link to="/">All Catagory</Link>{" "}
      </Button>
    </div>
  );
};

export default Catagory;
