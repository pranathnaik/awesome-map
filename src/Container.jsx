import React from "react";
import Boxes from "./Boxes";
const Container = () => {
  return (
    <>
      <div className="container">
        <div className="top-container">
          <h2>web dev</h2>
        </div>
        <div className="content-container">
          <Boxes />
        </div>
      </div>
    </>
  );
};

export default Container;
