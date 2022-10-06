import ProjectCard from "./ProjectCard";
import "./Project.css";
const Projects = () => {
  const projects = [
    {
      title: "Spotify AMQ",
      description:
        "Uses Spotify's Web API to allow users to play a music quiz game using their spotify accounts. Currently undeployed, code is available on request",
      link: "",
    },
    {
      title: "TeamProject",
      description:
        "A school group project where we can add, delete or edit survey's from a website. Uses MongoDB",
      link: "https://github.com/imtemp/survey-project",
    },
    {
      title: "Discord Music Bot",
      description: "A bot on discord that plays music from user commands.",
      link: "https://github.com/imtemp/discord-bot",
    },
  ];
  return (
    <div className="section">
      <h1 className="project-header">Projects</h1>
      <div className="flex flex-row justify-center items-center">
        <div className="h-56 grid grid-cols-3 gap-16 content-start">
          <ProjectCard
            title={projects[0].title}
            description={projects[0].description}
            link={projects[0].link}
          />
          <ProjectCard
            title={projects[1].title}
            description={projects[1].description}
            link={projects[1].link}
          />
          <ProjectCard
            title={projects[2].title}
            description={projects[2].description}
            link={projects[2].link}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
