import React from "react";
import "./style.css";

import Container from "./Container"
function App() {
  


  return (
    <>
      <div className="navbar">
        <div className="logo">Awesome map</div>
      </div>

      <div className="main-section">
        <Container />   
      </div>
    </>
  );
}

export default App;
