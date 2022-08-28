import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <section id="header">
        <a href="#">
          <img id="logo" src="img/logo.png" class="logo" alt="" />
        </a>
        <div>
          <ul id="navbar">
            <li>
              <a class="active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
