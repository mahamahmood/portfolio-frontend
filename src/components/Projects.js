import React, { useState, useEffect } from 'react';
import Layout from './Layout.js';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectCard from './ProjectCard.js';

function Projects(props) {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const response = fetch('/protfolios')
            const projects = await (await response).json();
            setProjects(projects);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const callProjects = async () => {
            await getProjects();
        }
        callProjects();
    }, []);

    return (
        <>
            <Layout />
            <div className="projects-container container">
                <h2 className="h2-projects"><i>const projects = "Featured Projects"</i></h2>
                {projects.map((project, idx) => {
                    return <ProjectCard key={idx} project={project} />
                })}
            </div>
        </>
    )
}

export default Projects;