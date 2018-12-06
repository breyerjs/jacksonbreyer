"use strict";
import React from 'react';
export default class ContactPage extends React.Component {
  render() {
    return (
        <div>
            <h2 className='title-text'>social + contact</h2>
            <ul className="contact-list">
                <li><a href="https://angel.co/jackson-breyer" className="normal-link">angel list =></a></li>
                <li><a href="https://www.github.com/breyerjs" className="normal-link">github =></a><br /></li>
                <li><a href="https://www.linkedin.com/in/breyerjs" className="normal-link">linkedin =></a><br /></li>
                <li>breyer [dot] js [at] gmail [dot] com</li>
            </ul>
        </div>
    );
  }
}
