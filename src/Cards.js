import React from "react";

const Boxes = (props) => {
  console.log(props);
  return (
    <>
      <div className="boxes">
        <div className="title">
          <h3>{props.name}</h3>
        </div>
        <div className="links">
          {props.links.map((data) => {
            return (
              <div className="link-column">
                <a href={data.link}>{data.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Boxes;
