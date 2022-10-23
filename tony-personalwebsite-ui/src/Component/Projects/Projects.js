import ProjectCard from "./ProjectCard";
import "./Project.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Projects = () => {
  const projects = [
    {
      title: "Personal Website",
      description: "Personal website for me showcasing my abilities and work",
      link: "https://tonylin.dev",
      image: "https://i.imgur.com/hGdO1xg.png",
    },
    {
      title: "TeamProject",
      description:
        "Login to a website to add, delete or edit your list of surveys",
      link: "https://github.com/imtemp/survey-project",
      image: "https://i.imgur.com/bdUJPfW.png",
    },
    {
      title: "Bono Bot",
      description:
        "A personalized Discord Bot that implements several different quality of life functions",
      link: "https://github.com/imtemp/Bono-Bot",
      image: "https://cdn.mos.cms.futurecdn.net/my8AUCgUhKERqBBwdPQuXG.jpg",
    },
  ];
  return (
    <div>
      <div className="spacer layer1"></div>
      <div className="section">
        <AnimationOnScroll animateOnce={true} animateIn="animate__zoomInDown">
          <h1 id="projects" className="header-center project-header">
            Projects
          </h1>
        </AnimationOnScroll>

        <div className="projects">
          <ul className="project-list">
            <li>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInLeftBig"
                delay="1000"
              >
                <ProjectCard
                  className="card"
                  title={projects[2].title}
                  description={projects[2].description}
                  link={projects[2].link}
                  img={projects[2].image}
                />
              </AnimationOnScroll>
            </li>
            <li>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInLeftBig"
                delay="500"
              >
                <ProjectCard
                  className="card"
                  title={projects[1].title}
                  description={projects[1].description}
                  link={projects[1].link}
                  img={projects[1].image}
                />
              </AnimationOnScroll>
            </li>
            <li>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInLeftBig"
              >
                <ProjectCard
                  className="card"
                  title={projects[0].title}
                  description={projects[0].description}
                  link={projects[0].link}
                  img={projects[0].image}
                />
              </AnimationOnScroll>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
