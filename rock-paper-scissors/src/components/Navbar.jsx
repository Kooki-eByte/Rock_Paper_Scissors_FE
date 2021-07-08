import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul id="nav">
        <p>Rock Paper Scissors</p>
        {window.location.pathname === "/" ? (
          <li>
            <a href="/stats">Stats 📊</a>
          </li>
        ) : (
          <li>
            <a href="/">Back ➡️</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
