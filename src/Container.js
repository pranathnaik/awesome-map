import React from "react";
import Boxes from "./Cards";
import Webdev from "./data/Data";
function Container(props) {
  return (
    <>
      <div className="container">
        {props.data.map((data) => {
          return (
            <>
              <Boxes key={data.id} name={data.name} links={data.links} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Container;
