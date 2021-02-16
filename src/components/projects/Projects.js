import React from 'react'
import projects from "../../data/projects";
import Title from "../Title";
import ProjectItem from "./ProjectItem";
const Projects = () => {
    return (
        <section className="projects"> 
            <div className="container">
                  <Title title=" Projects"/>
                  <div className="row">
                    {projects.map(item => {
                        return (
                            <ProjectItem key={item.id} {...item}/>
                        )
                    })}
                  </div>
            </div>
        </section>
    )
}
export default Projects;