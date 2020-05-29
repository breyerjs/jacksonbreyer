import React from 'react';
import Header from './components/shared/Header/Header';
import Layout from './components/shared/Layout/Layout';
import styles from './about.scss';

const About = (props) => {
    return(
        <div>
            <Header titleText={'Jackson Breyer'} subheader={"knows some technologies"} />
            <Layout>

                <div className={'intro'}>
                    <p>I had an English degree and was working as a paralegal when I realized that I wanted something different. So I began teaching myself to program after work. After a year and a half of self-study, I took the plunge and went back for a Master's degree in Computer Science at Brandeis University.</p>

                    <p>Studying at Brandeis was great. I took core classes in CS and explored topics I found interesting—especially Natural Language Processing.</p>

                    <p>Between years at Brandeis, I interned at Ginger.io in San Francisco. There I wrote backend code in Django and learned to work quickly. I loved being able to improve people's lives through code.</p>

                    <p>Next I worked for Practice Fusion, a company that builds an electronic health record system. I worked on a small team charged with finding creative solutions all over the stack.</p>

                    <p>After working as a full-stack developer on Yelp's Search Experience team, I took on the role of Engineering Manager. I enjoy the challenges of engineering at scale and the opportunity to improve the lives of millions of people daily.</p>
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
                        <div className={'content'}>Databases, Engineering Management, Feature Analysis and Experimentation, Full-Stack Web Development, Natural Language Processing, Search</div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};
export default About;
