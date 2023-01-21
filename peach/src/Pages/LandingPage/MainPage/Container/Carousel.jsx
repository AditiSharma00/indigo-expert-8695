import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousels = ({ start }) => {
  return (
    <s fade>
      {start.map((item) => (
        <Carousel.Item>
          <img
            width="80%"
            className="d-block w-100"
            src={item}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </s>
  );
};

export default Carousels;
