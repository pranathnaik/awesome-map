import React from "react";
import "./style.css";
import Webdev from "./data/Data";
import Container from "./Container";

function App() {
  const web = Webdev.map((data) => {
    return data;
  });

  return (
    <>
      <div className="navbar">
        <div className="logo">Awesome map</div>
        <div className="giticon">
          <a href="https://github.com/pranathnaik">git</a>
        </div>
      </div>
      <div className="main-sect ion">
        <Container data={web} />
      </div>
    </>
  );
}

export default App;
