"use strict";
import React from 'react';
import { Link } from 'react-router';
export default class Navigation extends React.Component {
  render() {
    return (
        <div className="navigation">
          <span className="nav-left">
            <Link to="/">
                <img className="logo" src="/img/avatar.png"/>
            </Link>
              <span className="nav-separation" />
            <h3> jackson breyer</h3>
          </span>

          <span className="nav-right">
            <Link to={"/"}> / </Link>
              <span className="nav-separation" />
            <Link to={"/about"}>about</Link>
              <span className="nav-separation" />
            <Link to={"/projects"}>projects</Link>
              <span className="nav-separation" />
            <Link to={"/interests"}>interests</Link>
              <span className="nav-separation" />
            <Link to={"/contact"}>social + contact</Link>
          </span>
          <br />
        </div>
    );
  }
}
