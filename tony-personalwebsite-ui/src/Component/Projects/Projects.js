import ProjectCard from "./ProjectCard";
import "./Project.css";

const Projects = () => {
  const projects = [
    {
      title: "Spotify AMQ",
      description:
        "Play an online game where you connect to your Spotify account and guess the title of the song that plays",
      link: "",
    },
    {
      title: "TeamProject",
      description:
        "Login to a website to add, delete or edit your list of surveys",
      link: "https://github.com/imtemp/survey-project",
    },
    {
      title: "Bono Bot",
      description:
        "A personalized Discord Bot that implements several different quality of life functions",
      link: "https://github.com/imtemp/Bono-Bot",
    },
  ];
  return (
    <div className="section">
      <h1 className="project-header">Projects</h1>
      <div className="flex flex-row justify-center items-center">
        <div className="h-56 grid grid-cols-3 gap-16 content-start">
          <ProjectCard
            title={projects[2].title}
            description={projects[2].description}
            link={projects[2].link}
          />
          <ProjectCard
            title={projects[1].title}
            description={projects[1].description}
            link={projects[1].link}
          />
          <ProjectCard
            title={projects[0].title}
            description={projects[0].description}
            link={projects[0].link}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
