import React from "react";
import "./TripButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const TripButton = props => (
  <span className="trip-button btn" {...props}>
    GO TO TRIP
  </span>
);

export default TripButton;
