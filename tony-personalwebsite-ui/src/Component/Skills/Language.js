import React, { useState } from "react";
import Modal from "./Modal";
import "./Language.css";

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
      <img
        className="img-language"
        onMouseEnter={(e) => onHover(e)}
        onMouseLeave={(e) => onHoverOver(e)}
        src={props.title}
      ></img>
      <p>{props.name}</p>
      {hover && <Modal />}
    </div>
  );
};

export default Language;
