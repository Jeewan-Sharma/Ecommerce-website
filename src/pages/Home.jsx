import React from "react";
import Announcement from "../components/Announcement";
import Car from "../components/Car";
import Navbar from "../components/Navbar";
// import "antd/dist/antd.css";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />

      <Car />
    </>
  );
};

export default Home;
