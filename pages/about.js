import React from 'react';
import Link from 'next/link';
import Header from './components/shared/Header/Header';
import Layout from './components/shared/Layout/Layout';
import styles from './about.scss';

const About = (props) => {
    return(
        <div>
            <Header titleText={'Jackson Breyer'} subheader={"knows some technologies"} />
            <Layout>

                <div className={'intro'}>
                    <p>I'm an Engineering Manager at Yelp. There, I lead the team responsible for Search Experience across Android, iOS and Web.</p>

                    <p>I haven't always worked in tech. I had an English degree and was working as a paralegal when I realized that I wanted a change. So I taught myself to program before going back to earn a Master's degree in Computer Science. If you're interested in that journey, check out  <Link href={'words/[wordsid]'} as={'/words/from-english-major-to-software-engineer'}>this blog post</Link> I wrote about it.</p>
                </div>

                <div className={'aboutItems'}>
                    <div className={'aboutSection'}>
                        <div className={'heading'}>Profiles:</div>
                        <div className={'content'}><a href="https://github.com/breyerjs" target="_blank">Github</a>, <a href="https://www.linkedin.com/in/breyerjs" target="_blank">Linkedin</a></div>
                    </div>

                    <div className={'aboutSection'}>
                        <div className={'heading'}>Site repo:</div>
                        <div className={'content'}><a href="https://github.com/breyerjs/jacksonbreyer/tree/master" target="_blank">View on Github</a></div>
                    </div>

                    <div className={'aboutSection'}>
                        <div className={'heading'}>Languages & Frameworks:</div>
                        <div className={'content'}>Many. Especially with a Python/Javascript focus. But I've worked all over the place.</div>
                    </div>

                    <div className={'aboutSection'}>
                        <div className={'heading'}>Professional Interests:</div>
                        <div className={'content'}>Databases, Engineering Management and Leadership, Feature Analysis and Experimentation, Full-Stack Web Development, Natural Language Processing, Search</div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};
export default About;
