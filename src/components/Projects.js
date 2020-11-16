import React, { useState, useEffect } from 'react';
import Layout from './Layout.js';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectCard from './ProjectCard.js';

function Projects(props) {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const response = fetch('https://maha-portfolio-app-api.herokuapp.com/protfolios')
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
                {/* <div className="row row-cols-1 row-cols-md-2"> */}
                    {projects.map((project, idx) => {
                        return <ProjectCard key={idx} project={project} />
                    })}
                {/* </div> */}
            </div>
        </>
    )
}

export default Projects;