import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const projects = [
    { id: 1, name: 'Project One', color: '#DA4453' },
    { id: 2, name: 'Project Two', color: '#E9573F' },
    { id: 3, name: 'Project Three', color: '#F6BB42' },
    { id: 4, name: 'Project Four', color: '#8CC152' },
    { id: 5, name: 'Project Five', color: '#37BC9B' },
    { id: 6, name: 'Sign Up / Login', color: '#3BAFDA', isAuth: true },
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
