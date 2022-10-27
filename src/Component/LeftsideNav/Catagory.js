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
    <div className="text-center">
      {catagoris.map((catagori) => (
        <div className=" text-center">
          <Link
            className=" text-decoration-none text-light fs-5"
            to={`/catagory/details/${catagori.id}`}
          >
            <Button className=" btn-primary w-75 my-2 py-3 ">
              {catagori.catagory}{" "}
            </Button>{" "}
          </Link>
        </div>
      ))}{" "}
    </div>
  );
};

export default Catagory;
