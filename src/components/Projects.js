import React, { useState, useEffect } from 'react';
import Layout from './Layout.js';

function Projects(props) {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const response = fetch('/protfolios')
            const projects = await (await response).json();
            console.log(projects);
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
        <div>
            <h2>All Projects</h2>
            {projects.map(project => {
                return (
                    <div className="projects" key={project.id}>
                        <h4>Title: <small>{project.title}</small></h4>
                        <h4>Description: <small>{project.description}</small></h4>
                        <h4>Project Repo: <small>{project.repo}</small></h4>
                        <h4>Live Site: <small>{project.live_site}</small></h4>
                        <br />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Projects;