import React, { useState } from "react";
import Modal from "./Modal";
import "./Language.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Language = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = (e) => {
    e.preventDefault();
    setHover(true);
  };

  const onHoverOver = (e) => {
    e.preventDefault();
    setHover(false);
  };

  return (
    <div className="imageBox">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <img
          className="img-language"
          onMouseEnter={(e) => onHover(e)}
          onMouseLeave={(e) => onHoverOver(e)}
          src={props.title}
        ></img>
        <p className="caption">{props.name}</p>
        {hover && <Modal />}
      </AnimationOnScroll>
    </div>
  );
};

export default Language;
