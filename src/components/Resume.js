import React from 'react';
import Layout from './Layout.js';
import './style.css';

function Resume(props) {
    return (
        <>
            <Layout />
            <div className="resume-container container">
                <div className="card border-secondary card-body mb-3">
                    <h2><u>ABOUT ME</u></h2>
                    <p>I’m a full-stack web developer and amateur photographer. I work with a “can-do”, “let’s test it out”, and “will try again” attitude. My previous experience in marketing gave me the ability to be adaptable and work under pressure. I can be analytical, creative, and technical whenever needed</p>
                </div>
                <div className="card border-secondary card-body mb-3">
                    <h2><u>SKILLS</u></h2>
                    <h5>Programming</h5>
                    <p>HTML5, CSS3, SASS, Bootstrap, JavaScript ES6, JQuery, RESTful APIs, ReactJS, NodeJS, ExpressJS, Ruby, Ruby on Rails, Mongoose, MongoDB, PostgreSQL, SQL, Git/GitHub, Heroku, Postman, Drupal, Django, VS Code, Chrome dev tools, React dev tools, Jira, Trello</p>
                    <h5>Interpersonal Skills</h5>
                    <p>Project Management, Communication, Collaboration, Problem Solving</p>
                    <h5>Marketing</h5>
                    <p>Email Marketing, SEO, Social Media, Graphic Design, User Experience, Google Analytics, Sailthru, Litmus, Hubspot, Adobe Photoshop, A/B Testing</p>
                </div>
                <div className="card border-secondary card-body mb-3">
                    <h2><u>EXPERIENCE</u></h2>
                    <div>
                        <h4>General Assembly</h4>
                        <h5>Software Engineering Fellow<small>, July 2020 - Oct 2020</small></h5>
                        <ol>
                            <p>- A 12-week long Full-time program that consists of lectures, labs, individual and group projects, and a minimum of 4 hours of homework a day</p>
                            <p>- Developing full-stack applications utilizing the latest technologies and programming languages</p>
                            <p>- Attending weekly standups to report on progress and presenting projects on presentation days</p>
                        </ol>
                    </div>
                    <div>
                        <h4>Audio Transcription Center</h4>
                        <h5>Digital Marketing Associate<small>, May 2020 - Present</small></h5>
                        <ol>
                            <p>- Assist the ATC team with email marketing and other digital marketing efforts by executing campaigns,reporting on results, and providing feedback and best practices</p>
                        </ol>
                    </div>
                    <div>
                        <h4>edX, Inc.</h4>
                        <h5>Email Marketing Coordinator/Marketing Coordinator/Marketing Intern<small>, May 2017 - Sep 2019</small></h5>
                        <ol>
                            <p>- Produced and deployed email marketing campaigns to engage, retain, and convert learners</p>
                            <p>- Build the very first anniversary campaign dedicated to improving customer loyalty</p>
                            <p>- Came up with ideas for A/B testing, themed newsletters, triggered emails, and email template adjustments that increased engagement and revenue</p>
                            <p>- Launched browse abandoned and re-engagement triggered emails as well as setting up a personalization for edX Spanish email marketing campaigns</p>
                            <p>- Managed, prioritized, and published a large volume of content on the marketing site using Drupal and Django</p>
                            <p>- Handled escalations and responded to partners (including Harvard and MIT ) and stakeholders’ questions and concerns throughout the process of content creation and post publication</p>
                        </ol>
                    </div>
                </div>
                <div className="card border-secondary card-body mb-3">
                    <h2><u>PROJECTS</u></h2>
                    <p><strong><a className="link-projects" href="/projects"><u>See Highlighted Projects</u></a></strong></p>
                </div>
                <div className="card border-secondary card-body mb-3">
                    <h2><u>EDUCATION</u></h2>
                    <div>
                        <h4>General Assembly<small>, Oct 2020</small></h4>
                        <p>Software Engineering Immersive</p>
                    </div>
                    <div>
                        <h4>University of Massachusetts Boston<small>, May 2018</small></h4>
                        <p>Bachelor of Science in Management with Concentration in Marketing</p>
                    </div>
                </div>
            </div>
            <footer></footer>
        </>
    )
};

export default Resume;