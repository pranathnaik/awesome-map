import React from "react";

const Boxes = (props) => {
  return (
    <>
      <div className="boxes">
        <div className="title">
          <h3>{props.name}</h3>
        </div>
        <div className="links">
          <ol>
            <li>
              <a href={props.link}> google</a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Boxes;
