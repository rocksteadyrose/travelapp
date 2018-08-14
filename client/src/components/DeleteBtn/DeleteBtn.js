import React from "react";
import "./DeleteBtn.css";

const DeleteBtn = props => (
  <span className="delete-btn btn" {...props}>
    DELETE <span role="img" aria-labelledby="trashcan">🗑</span> 

  </span>
);

export default DeleteBtn;
