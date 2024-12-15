import React from 'react';
import styles from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 

const projects = [
    { id: 1, name: 'Task List', color: '#fff8d6' },
    { id: 2, name: 'e-Commerce Review', color: '#fff0ad' },
    { id: 3, name: 'Weather Forecast', color: '#ffe985' },
    { id: 4, name: 'Translator', color: '#ffdd47' },
    { id: 5, name: 'Frontend Web Showcase', color: '#ffd61f' },
    { id: 6, name: 'Feedback/Contact', color: '#ffd100' },
];

const HomePage = () => {
    const navigate = useNavigate();

    const handleStartClick = (project) => {
        if (project.name === 'Feedback/Contact') {
            navigate('/Feedback');
        } else if (project.name === 'Task List') {
            navigate('/todo');
        } else if (project.name === 'e-Commerce Review') {
            navigate('/Multistep');
        } else if (project.name === 'Weather Forecast') {
            navigate('Weather');
        } else if (project.name === 'Translator') {
            navigate('/Translator');
        } else if (project.name === 'Frontend Web Showcase') {
            navigate('/EmbeddedWebsite');
        } else {
            navigate(`/projects/${project.id}`);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4, // Slower stagger for each child
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 }, // Increased vertical movement for smoother effect
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }, // Slower animation for each item
        },
    };

    return (
        <div className={styles.homepage}>
            <motion.div
                className={styles['Homegrid-container']}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className={styles['Homegrid-item']}
                        style={{ backgroundColor: project.color }}
                        onClick={() => handleStartClick(project)}
                        variants={itemVariants}
                    >
                        <span className={styles['Homeproject-name']}>{project.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default HomePage;
