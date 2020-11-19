import React from "react";
import "./style.css";
import Webdev, { androiddev } from "./data/Data";

import Container from "./Container";
function App() {
  const web = Webdev.map((data) => {
    return data;
  });
  return (
    <>
      <div className="navbar">
        <div className="logo">Awesome map</div>
        <div className="giticon">git</div>
      </div>

      <div className="main-section">
        <Container data={web} name="Web-development" />
        <Container data={androiddev} name="Android-development" />
        <Container data={web} name="Placements" />
      </div>
    </>
  );
}

export default App;
