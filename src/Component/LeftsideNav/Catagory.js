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

  console.log("ok", catagoris);

  return (
    <div>
      <h1> Catagory {catagoris.length} </h1>
      {catagoris.map((catagori) => (
        <div>
          <Button className=" btn-dark">
            <Link to={``}> {catagori.catagory} </Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Catagory;
