"use strict";
import React from 'react';
import { Link } from 'react-router';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <h2 className='title-text'>hello</h2>
        {"Welcome to my site! Feel free to take a look around. If you want to contact me, just click the link to the left. If you're curious about how I made the site, then you might find "}
        <a href="https://github.com/breyerjs/jacksonbreyer" className="normal-link">this github repo</a>
        {" to be helpful."}
      </div>
    );
  }
}