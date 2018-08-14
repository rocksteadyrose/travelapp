import React from "react";
import "./EditBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const EditBtn = props => (
  <span className="edit-btn" {...props}>
    Edit
  </span>
);

export default EditBtn;
