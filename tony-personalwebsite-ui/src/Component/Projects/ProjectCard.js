import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../../../public/img/landing.png" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">GitHub</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
