import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import Layout from '../Layout/Layout';

const HistoryPage = (props) => {
    return(
        <Layout>
            <Header titleText={'Jackson Breyer'} subheader={"wasn't always a software engineer"} />
            <p>I had an English degree and was working as a paralegal when I realized that I wanted something different. So I began teaching myself to program after work. After a year and a half of self-study, I took the plunge and went back for a Master's degree in Computer Science at Brandeis University.</p>

            <p>Studying at Brandeis was great. I took core classes in CS and explored topics I found interesting—especially Natural Language Processing.</p>

            <p>Between years at Brandeis, I interned at Ginger.io in San Francisco. There I wrote backend code in Django and learned to work quickly. I loved being able to improve people's lives through code.</p>

            <p>Next I worked for Practice Fusion, a company that builds an electronic health record system. I worked on a small team charged with finding creative solutions all over the stack.</p>

            <p>Currently I'm a full-stack developer on Yelp's Search Experience team. I enjoy the challenges of engineering at scale and tackling problems that impact millions of people daily.</p>
        </Layout>
    );
};
export default HistoryPage;
