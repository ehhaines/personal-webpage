import React from "react";
import boogie from "./boogie.jpg";

const NotFound = () => {
  return(
    <div className="text-center">
      <p className="display-6 text-secondary">Oh no! This page does not exist! Enjoy this picture of my cat instead:</p>
      <img src={boogie} className="w-25" alt="BOOGIE!"/>
      <div className="m-3 p-3"><a href="/" className="display-6 text-secondary">HOME</a></div>
    </div>
  );
}

export default NotFound;