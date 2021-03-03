import React from 'react';
import { Card } from 'react-bootstrap';
import { portfolioProjects } from './Constants';

const ProjectCard = ({ title, description, githubLink, demoLink}) =>
    <Card className="mb-3">
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <a href={githubLink} target="_blank" rel="noreferrer">Github</a> | <a href={demoLink} target="_blank" rel="noreferrer">Demo</a>
        </Card.Body>
    </Card>

const Projects = () =>
    <div className="mb-5">
        <h2>Projects</h2>
        {portfolioProjects.map((project, i) => <ProjectCard key={`project-${i}`} {...project} />)}
    </div>

export default Projects;