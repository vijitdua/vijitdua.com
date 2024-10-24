import React from "react";
import { projects } from "../../configs/projectsConfig";
import { experiences } from "../../configs/experiencesConfig";

function HiddenCrawlLinks() {
    return (
        <div style={{ display: 'none' }}>
            {/* Links for all projects */}
            {projects.map(project => (
                <a href={`/projects/${project.route}`} key={project.route}>
                    {project.title}
                </a>
            ))}

            {/* Links for all experiences */}
            {experiences.map(experience => (
                <a href={`/experience/${experience.route}`} key={experience.route}>
                    {experience.title}
                </a>
            ))}
        </div>
    );
}

export default HiddenCrawlLinks;
