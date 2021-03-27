import React from 'react';
import Link from 'next/link';
import Header from './components/shared/Header/Header';
import Layout from './components/shared/Layout/Layout';
import styles from './about.module.scss';

const About = (props) => {
    return(
        <div>
            <Layout>
                <Header titleText={'Jackson Breyer'} subheader={"knows some technologies"} />
                <div className={styles.intro}>
                    <p>I'm an Engineering Manager at Yelp—I lead the team responsible for Search Experience across Android, iOS and Web.</p>

                    <p>I haven't always worked in technology. If you're curious about my background, here's  <Link href={'words/[wordsid]'} as={'/words/from-english-major-to-software-engineer'}>a blog post</Link> I wrote.</p>
                </div>

                <div className={styles.aboutItems}>
                    <div className={styles.aboutSection}>
                        <div className={styles.heading}>Profiles:</div>
                        <p className={styles.content}><a href="https://github.com/breyerjs" target="_blank">Github</a>, <a href="https://www.linkedin.com/in/breyerjs" target="_blank">Linkedin</a></p>
                    </div>

                    <div className={styles.aboutSection}>
                        <div className={styles.heading}>Site repo:</div>
                        <p className={styles.content}><a href="https://github.com/breyerjs/jacksonbreyer/tree/master" target="_blank">View on Github</a></p>
                    </div>

                    <div className={styles.aboutSection}>
                        <div className={styles.heading}>Languages:</div>
                        <p className={styles.content}>Many. Especially with a Python/Javascript focus. But I've worked all over the place.</p>
                    </div>

                    <div className={styles.aboutSection}>
                        <div className={styles.heading}>Professional Interests:</div>
                        <p className={styles.content}>Databases, Engineering Management and Leadership, Feature Analysis and Experimentation, Full-Stack Web Development, Natural Language Processing, Performance Optimization, Search</p>
                    </div>
                </div>
            </Layout>
        </div>
    );
};
export default About;
