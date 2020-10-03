import React from 'react';
import './style.css';

function NavBar(props) {
    return (
        <div>
            <header>
                <div className='headshot'>
                    <img src="https://i.imgur.com/thO781C.png" alt="maha-headshot" hight="120" width="190" />
                    <div className="name">
                        <ul>
                            <li className="myname"><strong>Maha Mahmood</strong></li>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/projects'>Projects</a></li>
                            <li><a href='https://www.linkedin.com/in/mahamahmood/' target="_blank">LinkedIn</a></li>
                            <li><a href='https://github.com/mahamahmood' target="_blank">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default NavBar;