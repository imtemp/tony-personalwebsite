import React, { useRef } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <section id="header">
        <div>
          <ul id="navbar">
            <li>
              <Link
                activeClass="active"
                delay={0}
                smooth={true}
                duration={500}
                to="skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                delay={0}
                smooth={true}
                duration={500}
                to="projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                delay={0}
                smooth={true}
                duration={500}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
