import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <p>
        Return to 
        <NavLink to="/"> Home page</NavLink>
        <h1>404 Not Found</h1>
      </p>
    </div>
  );
}

export default NotFound;
