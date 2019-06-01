import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import Layout from '../Layout/Layout';
import styles from './TechnicalPage.scss';

const TechnicalPage = (props) => {
    return(
        <Layout>
            <Header titleText={'Jackson Breyer'} subheader={"knows some technologies"} />
            <div className={styles.technicalMain}>
                <div className={styles.technicalSection}>
                    <div className={styles.heading}>Profiles:</div>
                    <div className={styles.content}><a href="https://github.com/breyerjs" target="_blank">Github</a>, <a href="https://www.linkedin.com/in/breyerjs" target="_blank">Linkedin</a></div>
                </div>

                <div className={styles.technicalSection}>
                    <div className={styles.heading}>Site repo:</div>
                    <div className={styles.content}><a href="https://github.com/breyerjs/jacksonbreyer/tree/master/src" target="_blank">View on Github</a></div>
                </div>

                <div className={styles.technicalSection}>
                    <div className={styles.heading}>Languages & Frameworks:</div>
                    <div className={styles.content}>C#, CSS, Django, Ember, HTML, Java, JavaScript, Postgres, Python, React, SQL</div>
                </div>

                <div className={styles.technicalSection}>
                    <div className={styles.heading}>Topics:</div>
                    <div className={styles.content}>Databases, Full-Stack Web Development, Machine Learning, Natural Language Processing</div>
                </div>
            </div>
        </Layout>
    );
};
export default TechnicalPage;
