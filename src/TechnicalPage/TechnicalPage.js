import React from 'react';
import Header from '../Header/Header';
import styles from './TechnicalPage.scss';

const TechnicalPage = () => {
    return(
        <div>
            <Header subheader={"knows some technologies"} />
           
            <div className={styles.heading}>Profiles:</div>
            <div className={styles.content}><a href="https://github.com/breyerjs" target="_blank">Github</a>, <a href="https://www.linkedin.com/in/breyerjs" target="_blank">Linkedin</a></div>

            <div className={styles.heading}>Site repo:</div>
            <div className={styles.content}><a href="https://github.com/breyerjs/jacksonbreyer/tree/master/src" target="_blank">View on Github</a></div>
            
            <div className={styles.heading}>Languages & Frameworks:</div>
            <div className={styles.content}>C#, CSS, Django, Ember, HTML, Java, JavaScript, Postgres, Python, React, SQL</div>

            <div className={styles.heading}>Topics:</div>
            <div className={styles.content}>Databases, Full-Stack Web Development, Machine Learning, Natural Language Processing</div>
        </div>
    );
};
export default TechnicalPage;