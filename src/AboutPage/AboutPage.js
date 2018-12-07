import React from 'react';
import Header from '../Header/Header';
import styles from './AboutPage.css';

const AboutPage = () => {
    return(
        <div>
            <Header subheader={"is a software engineer"} />
            <p>I am a full-stack developer on the Search Experience team at Yelp.</p>

            <p>"Full-stack" means that I write all sorts of code—frontend, backend, user-facing features, infrastructure, and so forth. Each of my days can be quite unique.</p>

            <p>"Search Experience" means that I'm responsible for what a user experiences when they search on Yelp.</p>

            <p>You probably know what Yelp means. But if you don't (or even if you do), feel free to <a href="http://www.yelp.com" target="_blank">take a look</a>.</p>

            <div className={styles.separator} />

            <p>Quick facts:</p>
            
            <p>Here are my <a href="https://github.com/breyerjs" target="_blank">github</a> and <a href="https://www.linkedin.com/in/breyerjs" target="_blank">linkedin</a> profiles.</p>
            
            <p>Here are some languages and frameworks I've used:<br />C#, CSS, Django, Ember, HTML, Java, JavaScript, Postgres, Python, React, SQL</p>

            <p>Here are some topics I have experience with:<br />Databases, Full-Stack Web Development, Machine Learning, Natural Language Processing</p>
        </div>
    );
};
export default AboutPage;