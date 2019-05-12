import React from 'react';
import Header from '../Header/Header';
import styles from './AboutPage.scss';

const AboutPage = () => {
    return(
        <div>
            <Header subheader={"is a software engineer"} />
            <div className={styles.definition}>I am a full-stack ¹ developer on the Search Experience ² team at Yelp. ³</div>

            <div className={styles.footnote}>¹ Frontend, backend, user-facing features, infrastructure, etc.</div>

            <div className={styles.footnote}>² How users experience a search and its results.</div> 

            <div className={styles.footnote}>³ Well, you probably know this one. But hey, <a href="http://www.yelp.com" target="_blank">take a look</a>.</div>
        </div>
    );
};
export default AboutPage;