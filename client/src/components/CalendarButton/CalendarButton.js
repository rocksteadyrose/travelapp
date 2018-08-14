import React from "react";
import "./CalendarButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const CalendarButton = props => (
  <span className="calendar-button btn" {...props}>
    ADD TO CALENDAR
  </span>
);

export default CalendarButton;
