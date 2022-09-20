import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {projects.map((project) => {
          return <ProjectItem
            key={project.id}
            about={project.about}
            name={project.name}
            technologies={project.technologies} />;
        })}

        {/* <ProjectItem
          key={projects.id}
          about={projects.about}
          name={projects.name}
          technologies={projects.technologies}

        /> */}
      </div>
    </div>
  );
}

export default ProjectList;
