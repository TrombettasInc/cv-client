import React from 'react';
import styles from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';

const projects = [
    { id: 1, name: 'Task List', color: '#b6e4eb' },
    { id: 2, name: 'e-Commerce Review', color: '#d9f1f2' },
    { id: 3, name: 'Weather Forecast', color: '#fbdee2' },
    { id: 4, name: 'Project Four', color: '#feafab' },
    { id: 5, name: 'Project Five', color: '#fbd5b0' },
    { id: 6, name: 'Sign Up / Login', color: '#fcf1d7', isAuth: true },
];

const HomePage = () => {
    const navigate = useNavigate();

    const handleStartClick = (project) => {
        if (project.isAuth) {
            navigate('/signup');
        } else if (project.name === 'Task List') {
            navigate('/todo');
        } else if (project.name === 'e-commerce review'){
            navigate('Multistep');
        } else if(project.name === 'Weather Forecast'){
            navigate('Weather');
        }
        else {
            navigate(`/projects/${project.id}`);
        }
    };

    return (
        <div className={styles.homepage}>
            <div className={styles['grid-container']}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={styles['grid-item']}
                        style={{ backgroundColor: project.color }}
                        onClick={() => handleStartClick(project)}
                    >
                        <span className={styles['project-name']}>{project.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
