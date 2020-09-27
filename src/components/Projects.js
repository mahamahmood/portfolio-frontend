import React, { useState, useEffect } from 'react';

function Projects(props) {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const response = fetch('/projects')
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
            <h2>All Projects</h2>
            {projects.map(project => {
                return (
                    <div className="projects" key={project.id}>
                        <h4>Title: <small>{project.title}</small></h4>
                        <h4>Description: <small>{project.description}</small></h4>
                        <h4>Repo Backend: <small>{project.repo_backend}</small></h4>
                        <h4>Repo Frontend: <small>{project.repo_frontend}</small></h4>
                        <h4>Live Site: <small>{project.live_site}</small></h4>
                        <br />
                    </div>
                )
            })}
        </>
    )
}

export default Projects;