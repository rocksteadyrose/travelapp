import React from "react";
import "./FavBtn.css";

const FavBtn = props => (
  <span className="fave-button btn" {...props}>
    Favorite <span role="img" aria-labelledby="heart">❤️</span> 
  </span>
);

export default FavBtn;