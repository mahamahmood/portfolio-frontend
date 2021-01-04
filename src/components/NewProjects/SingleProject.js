import React from 'react';


export default function SinglePoject(props) {
    const project = props.project;

    return (
        <>
            <div className="projects-container container">
                <div id="card" className="card border-secondary mb-5" key={project.id}>
                    <h4 id="card-header" className="card-header"><strong>{project.title}</strong></h4>

                    {/* **** img **** */}
                    <a href={project.live_site} rel="noopener noreferrer" target="_blank"><img src={project.img} id="img-project" className="card-img-bottom" alt={project.title}></img></a>
                    {/* **** img **** */}

                    <h5 id="card-descripton" className="card-body card-descripton">{project.description}</h5>

                    <div className="btn-group card-btns" role="group" aria-label="Basic example">
                        <a type="button" className="btn btn-secondary" id="btn-orange" rel="noopener noreferrer" href={project.live_site} target="_blank"><strong>Live Site</strong></a>
                        <a type="button" className="btn btn-secondary" id="btn-orange" rel="noopener noreferrer" href={project.repo} target="_blank"><strong>Project Repo</strong></a>
                    </div>
                </div>
            </div>
        </>
    );
}
