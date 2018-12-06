"use strict";
import React from 'react';
export default class AboutPage extends React.Component {
  render() {
    return (
        <div>
            <h2 className='title-text'>about</h2>
            <ul>
                <li>who's jackson breyer?</li>
                    <p>I had an English degree and was working as a paralegal when I realized that I wanted something different. I began teaching myself to program after work. After a year and a half of learning, I was hooked and wanted to focus more deeply on Computer Science. So I went back for a Master's degree at Brandeis University.</p>

                    <p>Brandeis was awesome. I took core classes in CS and explored topics I found interesting, especially Natural Language Processing.</p>

                    <p>Between years at Brandeis, I interned at Ginger.io in San Francisco. There I wrote backend code in Django and learned to move quickly. I loved my first exposure to writing production code.</p>

                    <p>Next I worked for Practice Fusion, a company that builds an electronic health record system. I worked on a small team charged with finding creative solutions all over the stack. </p>

                    <p>Currently I'm a full-stack developer on Yelp's Search Experience team. I've enjoyed the challenges of engineering for a broad audience and tackling problems that impact millions of people. </p>
                <li>languages</li>
                    <p>Python, JavaScript, Ruby, C#, Java, SQL, HTML, CSS</p>
                <li>frameworks</li>
                    <p>Django, Ember, React, Rails, Android, Postgres</p>
                <li>other tools + areas</li>
                    <p>Git, Databases, Natural Language Processing, Automated Testing</p>
                </ul>
        </div>
    );
  }
}
