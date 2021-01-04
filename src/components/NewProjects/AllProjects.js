import React from 'react';
import Layout from '../Layout.js';
import SinglePoject from './SingleProject.js';
import 'bootstrap/dist/css/bootstrap.css';

function AllProjects(props) {
    const projectInfo = [
        {
            "title": "Courses For Her",
            "img": "https://i.imgur.com/tnGXrzH.png",
            "description": "This app was created using Ruby on Rails for the backend, Postgres for DB, and React for the frontend. I've created this app provide access to online learning to women around the world.",
            "repo": "https://github.com/mahamahmood/courses_for_her_api",
            "live_site": "https://coursesforher.herokuapp.com/"
        },
        {
            "title": "Sumer Market",
            "img": "https://i.imgur.com/FJttYNv.png",
            "description": "A Full-stack online grocery app built using Node.js, Express, Bootstrap, HTML5, and CSS.",
            "repo": "https://github.com/mahamahmood/sumer-market",
            "live_site": "https://sumer-market.herokuapp.com/"
        },
        {
            "title": "Teky App",
            "img": "https://i.imgur.com/DYR8LXg.png",
            "description": "(Group Project) A full CRUD app designed for developers and engineers offering them tools such as canvas to help them with the wireframing, journal to add what skills they learned, and the ability to create events as well as attend events created by other users. Built with Node.js, Mongoose, Express, React, HTML5, CSS, and MongoDB.",
            "repo": "https://github.com/vertefra/techJournalClient",
            "live_site": "https://techjournalclient.herokuapp.com/"
        },
        {
            "title": "GA Hackathon - Icebreaker Maker",
            "img": "https://i.imgur.com/CMvvanm.png",
            "description": "(Group Project) This app was created during GA Holiday Hackathon to promote remote togetherness during COVID-19 using Firebase for the backend and React for the frontend.",
            "repo": "https://github.com/MTaylor124/ice-breaker-maker",
            "live_site": "https://ice-breaker-maker.web.app/"
        },
        {
            "title": "Tic Tac Toe",
            "img": "https://i.imgur.com/ov5Lgqm.png",
            "description": "A player vs. player game built using HTML5, CSS, Javascript, and JQuery.",
            "repo": "https://github.com/mahamahmood/tic-tac-toe",
            "live_site": "https://tic-tac-toe-git-master.mahamahmood.vercel.app/"
        },
        {
            "title": "Donations App",
            "img": "https://i.imgur.com/8lrhswf.png",
            "description": "This app was created in less than 10 hours using Ruby on Rails for the backend, Postgres for DB, and React for the frontend. The main reason for the app is to provide users with the ability to create a list of items they want to donate. In the future, I would like to make it full CRUD and give users the ability to get donated items from other users.",
            "repo": "https://github.com/mahamahmood/donations_app_client",
            "live_site": "https://donations-app-client.herokuapp.com/"
        },
        {
            "title": "Email Template - Recipe Theme",
            "img": "https://i.imgur.com/hfCsemO.png",
            "description": "An email template built with HTML and CSS to feature recipes from the Sumer Market App.",
            "repo": "https://github.com/mahamahmood/email-template-sumer-market",
            "live_site": "https://email-template-sumer-market.vercel.app/"
        },
        {
            "title": "Email Template - Apperal Theme",
            "img": "https://i.imgur.com/3XELr6O.png",
            "description": "A responsive HTML template with HTML tables and CSS.",
            "repo": "https://github.com/mahamahmood/email-template-apparel",
            "live_site": "https://email-template-apparel.vercel.app/"
        },
        {
            "title": "NextStep",
            "img": "https://i.imgur.com/dDNxjMa.png",
            "description": "A job board app built using GitHub Jobs API. Used Traversy Media Video to learn how to integrate an API and include a search, filter, and pagination.",
            "repo": "https://github.com/mahamahmood/NextStep",
            "live_site": "https://next-step-nine.vercel.app/"
        }
    ];
    return (
        <>
            <Layout />
            <div className="projects-container">
                <h2 className="h2-projects"><i>const projects = "Featured Projects"</i></h2>
                <div className="row row-cols-1 row-cols-md-2 m-3">
                    {projectInfo.map((project, idx) => {
                        return <SinglePoject key={idx} project={project} />
                    })}
                </div>
            </div>
        </>
    );
}

export default AllProjects;