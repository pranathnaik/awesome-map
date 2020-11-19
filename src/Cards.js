import React from "react";

const Boxes = (props) => {
  return (
    <>
      <div className="boxes">
        <ol>
          <li>{props.name}</li>
          <li>{props.link}</li>
        </ol>
      </div>
    </>
  );
};

export default Boxes;
