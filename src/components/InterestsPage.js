"use strict";
import React from 'react';
export default class InterestsPage extends React.Component {
  render() {
    return (
        <div>
            <h2 className='title-text'>interests</h2>
            <ul>
                <li>linguistics</li>
                    <p>I studied Linguistics as an undergraduate English major, and have been happily diagramming sentences since the fifth grade.</p>

                <li>natural language processing</li>
                    <p>The intersection of Linguistics and Computer Science! Everything I love, bundled into a single package. I think there's a lot of unexplored potential to leverage existing NLP technology.</p>
                <li>hiking</li>
                    <p>It's great to get outdoors and do some hiking. Living in San Francisco gives me access to some amazing parks like Yosemite.</p>
                <li>martial arts</li>
                    <p>I've practiced Taekwondo in various styles for 17 years. I have a black belt from the World Taekwondo Federation and worked as an instructor all through high school.</p>
                <li>fantasy reading + writing</li>
                    <p>Books are fun! Recently, I've been reading a lot of Patrick Rothfuss and Neil Gaiman.</p>
            </ul>
        </div>
    );
  }
}