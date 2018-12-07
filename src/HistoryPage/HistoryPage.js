import React from 'react';
import Header from '../Header/Header'

const HistoryPage = () => {
    return(
        <div>
            <Header subheader={"wasn't always a software engineer"} />
            <p>I had an English degree and was working as a paralegal when I realized that I wanted something different. So I began teaching myself to program after work. After a year and a half of studying on my own, I took the plunge and went back for a Computer Science Master's degree at Brandeis University.</p>

            <p>Brandeis was great. I took core classes in CS and explored topics I found interesting, especially Natural Language Processing.</p>

            <p>Between years at Brandeis, I interned at Ginger.io in San Francisco. There I wrote backend code in Django and learned to move quickly. I loved my first exposure to writing production code.</p>

            <p>Next I worked for Practice Fusion, a company that builds an electronic health record system. I worked on a small team charged with finding creative solutions all over the stack.</p>

            <p>Currently I'm a full-stack developer on Yelp's Search Experience team. I've enjoyed the challenges of engineering for a broad audience and tackling problems that impact millions of people.</p>
        </div>
    );
};
export default HistoryPage;