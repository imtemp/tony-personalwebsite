import React, { useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const scrollToRef = useRef();

  return (
    <div>
      <section id="header">
        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="#">
                About
              </a>
            </li>
            <li>
              <a className="" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
