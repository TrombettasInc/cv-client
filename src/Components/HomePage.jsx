import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const projects = [
    { id: 1, name: 'Project One', color: '#b6e4eb' },
    { id: 2, name: 'Project Two', color: '#d9f1f2' },
    { id: 3, name: 'Project Three', color: '#fbdee2' },
    { id: 4, name: 'Project Four', color: '#feafab' },
    { id: 5, name: 'Project Five', color: '#fbd5b0' },
    { id: 6, name: 'Sign Up / Login', color: '#fcf1d7', isAuth: true },
];

const HomePage = () => {
    const navigate = useNavigate();

    const handleStartClick = (project) => {
        if (project.isAuth) {
            navigate('/signup');
        } else {
            navigate(`/projects/${project.id}`);
        }
    };

    return (
        <div className="homepage">
            <div className="grid-container">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="grid-item"
                        style={{ backgroundColor: project.color }}
                        onClick={() => handleStartClick(project)}
                    >
                        <span className="project-name">{project.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
