import Button from "react-bootstrap/Button";
import "./ProjectCard.css";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  return (
    <div className="card">
      <a href={props.link} className="no-underline text-black">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default ProjectCard;
