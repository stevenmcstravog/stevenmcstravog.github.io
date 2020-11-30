import React from 'react';
import ProfilePicture from '../avatar.jpg';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';

const Avatar = () =>
    <div className="img mb-3">
        <img className="img-photo" src={ProfilePicture} alt="Steven McStravog" />
    </div>

const Description = () =>
    <div className="mb-4">
        <h1 className="mb-3">Steven McStravog</h1>
        <p>I am a enthusiastic software engineer with several years industrial experience.</p>
        <p>Lover of React, doggos and whisk(e)y.</p>
    </div>

const Follow = () =>
    <div className="mb-4">
        <h6>FOLLOW ME ON</h6>
        <a href="https://www.linkedin.com/in/stevenmcstravog/" target="_blank" rel="noreferrer" className="mr-3">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/stevenmcstravog" target="_blank" rel="noreferrer" className="mr-3">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/stevenmcstravog" target="_blank" rel="noreferrer" className="mr-3">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://codepen.io/stevenmcstravog/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faCodepen} />
        </a>
    </div>

const Contact = ({ window }) =>
    <React.Fragment>
        <h6>GET IN TOUCH</h6>
        <Button variant="light" onClick={() => window.location.href='mailto:steven.mcstravog@gmail.com'}>Contact Me</Button>
    </React.Fragment>

const About = ({ window }) =>
    <div className="text-center mb-5">
        <Avatar />
        <Description />
        <Follow />
        <Contact window={window} />
    </div>

export default About;