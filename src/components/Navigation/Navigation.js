import React from 'react';
import { Link } from 'react-router';
import './NavStyles.css'
export default class Navigation extends React.Component {
  render() {
    return (
        <div className='navigation'>
            <Link to="/">
                <h2>jackson breyer</h2>
            </Link>
            <br />
            <Link to={"/"}> Slash </Link>
            <br />
            <Link to={"/about"}>About</Link>
            <br />
            <Link to={"/projects"}>Projects</Link>
            <br />
            <Link to={"/interests"}>Interests</Link>
        </div>
    );
  }
}
