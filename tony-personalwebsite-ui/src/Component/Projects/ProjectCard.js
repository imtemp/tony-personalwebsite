import "./ProjectCard.css";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  return (
    /*
    <div className="card">
      <div>
        <img className="card-image" src={props.img}></img>
      </div>
      <div className="card-info">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
    */
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
