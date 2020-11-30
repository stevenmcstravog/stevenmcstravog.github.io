import React from 'react';
import { Badge } from 'react-bootstrap';
import { employment } from './Constants';

const ExperienceSection = ({ company, title, date, stack}) =>
    <section className="mb-4">
        <p className="font-weight-bold mb-2">{company}</p>
        <p className="mb-0">{title}</p>
        <p className="font-italic mb-1"><small>{date}</small></p>
        {stack.map((s, i) => <Badge pill variant="light" key={`${company}-stack-${i}`}>{s}</Badge>)}
    </section>

const Experience = () =>
    <div className="pb-4">
        <h2>Experience</h2>
        {employment.map((job, i) => <ExperienceSection key={`job-${i}`} {...job} />)}
    </div>;

export default Experience;