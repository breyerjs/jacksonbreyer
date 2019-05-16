import React from 'react';
import Header from '../Header/Header';
import styles from './AboutPage.scss';

const AboutPage = () => {
    return(
        <div>
            <Header subheader={"is a software engineer"} />
            <p>I'm Jackson Breyer and this is my personal website.</p> 
            <p>I'm currently a full-stack developer on the Search Experience team at Yelp. That means I write all sorts of code, and that it gets used by all sorts of people.</p>
            <p>I wasn't always a Software Engineer. If you're interested in that journey, check out the 'History' section.</p>
            <p>Otherwise, the 'Technical' and 'Projects' pages may be what you're after.</p>
        </div>
    );
};
export default AboutPage;