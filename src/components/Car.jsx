import { Carousel } from "antd";
import React from "react";
import "antd/dist/antd.css";
const contentStyle = {
  height: "650px",
  color: "#fff",
  lineHeight: "460px",
  textAlign: "center",
  background: "#364d79",
};

const Car = () => {
  return (
    <Carousel autoplay>
      <div>
        <div>
          <img src="../images/1.png" alt="condo" />
        </div>

        <h3 style={contentStyle}>Hello!</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Namaste!</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Hi!</h3>
      </div>
      <div>
        <h3 style={contentStyle}>ola!</h3>
      </div>
    </Carousel>
  );
};

export default Car;
