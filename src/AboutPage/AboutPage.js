import React from 'react';
import Header from '../Header/Header';
import styles from './AboutPage.scss';

const AboutPage = () => {
    return(
        <div>
            <Header subheader={"is a software engineer"} />
            <div className={styles.syllables}>[ Jack·son Brey·er ] · proper noun </div>

            <div className={styles.definition}>A full-stack ¹ developer on the Search Experience ² team at Yelp. ³</div>

            <div className={styles.footnote}>¹ Full-stack: writes all sorts of code. Frontend, backend, user-facing features, infrastructure, etc.</div>

            <div className={styles.footnote}>² Search Experience: what a user experiences when they perform a search.</div> 

            <div className={styles.footnote}>³ Well, you probably know this one. But hey, <a href="http://www.yelp.com" target="_blank">take a look</a>.</div>

            {/* <div className={styles.separator} /> */}
        </div>
    );
};
export default AboutPage;