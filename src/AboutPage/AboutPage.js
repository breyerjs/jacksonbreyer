import React from 'react';
import Header from '../Header/Header';
import styles from './AboutPage.css';

const AboutPage = () => {
    return(
        <div>
            <Header subheader={"is a software engineer"} />
            <p>I am a full-stack developer on the Search Experience team at Yelp.</p>

            <p>"Full-stack" means that I write all sorts of code—in the frontend, in the backend, for infrastructure, for user-facing features, and so forth. It means that any given day can be quite unique. I enjoy that a lot.</p>

            <p>"Search Experience" means that I handle what a user experiences when they search. It's amazing how small, simple changes can have an outsized effect on a user's success.</p>

            <p>You probably know what Yelp means. But if you don't (or even if you do), feel free to <a href="http://www.yelp.com">take a look</a>.</p>

            <div className={styles.separator} />

            <p>Some quick facts:</p>
            
            <p>Here are <a href="https://github.com/breyerjs">my github</a> and <a href="https://www.linkedin.com/in/breyerjs"> linkedin</a> profiles.</p>
        </div>
    );
};
export default AboutPage;