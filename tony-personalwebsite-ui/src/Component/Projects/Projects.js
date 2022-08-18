import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projects = [
    { title: "TeamProject", description: "Lorem Ipsum" },
    {
      title: "Portfolio",
      description: "Description!!!!",
    },
  ];
  return (
    <div>
      <h1>Projects</h1>
      <ProjectCard />
    </div>
  );
};

export default Projects;
