"use strict";
import React from 'react';
import { Link } from 'react-router';
export default class Sidebar extends React.Component {
  render() {
    return (
        <div className="sidebar">
            <div>
                <h3> jackson <br />breyer</h3>
                <Link to="/">
                    <img className="logo" src="/img/avatar.png"/>
                </Link>
                <ul>
                    <li>
                        <Link to={"/"} className="sidebar-link"> / </Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="sidebar-link"> about </Link>
                    </li>
                    <li>
                        <Link to={"/projects"} className="sidebar-link"> projects </Link>
                    </li>
                    <li>
                        <Link to={"/interests"} className="sidebar-link"> interests </Link>
                    </li>
                    <li>
                        <Link to={"/contact"} className="sidebar-link">social + contact </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}