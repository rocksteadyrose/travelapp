import React from "react";
import "./Jumbotron.css";

export const Jumbotron = props => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
    <div className="jumbotron">
      <div className="container">
        <h1>
          Your Trips <i className="fa fa-calendar" />
        </h1>
        <p>Get Stylin'!</p>
      </div>
    </div>
  </div>

);

export default Jumbotron;
