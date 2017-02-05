"use strict";
import React from 'react';
export default class AboutPage extends React.Component {
  render() {
    return (
        <div>
            <h2 className='title-text'>about</h2>
            <ul>
                <li>who's jackson breyer?</li>
                    <p>I had an English degree and was working as a paralegal when I realized that I wanted something else. So I taught myself to program at nights. After a year and a half of learning on my own, I was hooked and wanted a more robust education in Computer Science. So I went back for a Master's degree at Brandeis University.</p>

                    <p>Brandeis was awesome. They let me take core classes in CS as well as explore topics I found interesting, like Natural Language Processing.</p>

                    <p>Between years at Brandeis, I interned at Ginger.io in San Francisco. There I wrote backend code in Django and learned to move quickly. I loved my first exposure to writing production code.</p>

                    <p>Since graduating from Brandeis, I've been working for Practice Fusion, a company that builds an electronic health record system. I've worked all over the stack, on a small but dedicated team. </p>
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