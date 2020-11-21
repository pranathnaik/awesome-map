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
              <a
                className="link-column"
                href={data.link}
                target="_blank  rel=noopener"
              >
                {data.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Boxes;
