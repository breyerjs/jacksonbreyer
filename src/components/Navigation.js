"use strict";
import React from 'react';
import { Link } from 'react-router';
export default class Navigation extends React.Component {
  render() {
    return (
        <div className="navigation">

          <div className="nav-left">
            <Link to="/">
              <img className="logo" src="/img/avatar.png"/>
            </Link>
          <span className="nav-separation" />

          <div className="nav-left">
            <h2>jackson breyer</h2>
          </div>

          </div>

          <div className="nav-right">
            <Link to={"/"}> / </Link>
              <span className="nav-separation" />
            <Link to={"/about"}>about</Link>
              <span className="nav-separation" />
            <Link to={"/projects"}>projects</Link>
              <span className="nav-separation" />
            <Link to={"/interests"}>interests</Link>
          </div>
        </div>
    );
  }
}
