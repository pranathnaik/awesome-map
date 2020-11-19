import React from "react";
import Boxes from "./Cards";
import Webdev from "./data/Data";
function Container(props) {
  return (
    <>
      <div className="container">
        <div className="top-container">
          <p>{props.name}</p>
        </div>
        <div className="content-container">
          {props.data.map((data) => {
            return (
              <>
                <Boxes key={data.id} name={data.name} link={data.link} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Container;
