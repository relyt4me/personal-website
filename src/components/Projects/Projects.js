import "./Projects.css";
import { projectData } from "../../data/projectData";
import { useState } from "react";

const Projects = () => {
  const [project, setProject] = useState(projectData[0]);

  //function that returns a list of the stack
  const printStack = () => {
    return project.stack.map((language) => {
      return <li key={language}>{language}</li>;
    });
  };

  //function that handles the change of project back or forward
  const changeProject = (direction) => {
    let newIndex = projectData.indexOf(project) + direction;
    if (newIndex >= projectData.length) {
      newIndex = 0;
    } else if (newIndex === -1) {
      newIndex = projectData.length - 1;
    }
    setProject(projectData[newIndex]);
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <aside className="stack">
        <h2>STACK</h2>
        {printStack()}
      </aside>
      <div className="project">
        <button
          alt="previous project"
          className="back-button"
          onClick={() => changeProject(-1)}
        >
          {"<"}
        </button>
        <button
          alt="next project"
          className="next-button"
          onClick={() => changeProject(1)}
        >
          {">"}
        </button>
        <img
          src={project.screenshot}
          alt={`screenshot of ${project.name} site`}
        />
        <article>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </article>
      </div>
      <aside className="project-links">
        <a href={project.repoURL} target="_blank">
          Repository
        </a>
        <br />
        <a href={project.liveURL} target="_blank">
          Live App
        </a>
      </aside>
    </div>
  );
};

export default Projects;
