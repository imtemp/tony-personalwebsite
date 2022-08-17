import "./Language.css";

const Language = (props) => {
  return (
    <div className="imageBox">
      <figure>
        <img src={props.title}></img>
        <figcaption>{props.name}</figcaption>
      </figure>
    </div>
  );
};

export default Language;
