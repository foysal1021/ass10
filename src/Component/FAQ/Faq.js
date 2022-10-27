import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Faq = () => {
  return (
    <div>
      <div className=" m-3 border rounded-3 p-5">
        <h1 className=" text-center"> FAQ </h1>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header> Project Overview </Accordion.Header>
            <Accordion.Body>
              This is a learning website, Online education. Here have 6 coures.
              <ol>
                <li> Branding</li>
                <li> email marketing</li>
                <li> wordpress</li>
                <li> Photography</li>
                <li> java script</li>
                <li> Web devlopement</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              what did i use for this project{" "}
            </Accordion.Header>
            <Accordion.Body>
              <h4> this is a react project </h4>
              <ol>
                <li> React ROUTER </li>
                <li> React Bootstrap</li>
                <li> Firebase </li>
                <li> NOde js </li>
                <li> etc</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
