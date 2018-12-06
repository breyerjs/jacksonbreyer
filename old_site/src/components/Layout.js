import React from 'react';
import Navigation from './Navigation/Navigation';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet" />



        <link rel="stylesheet" href="/css/style.css" />

        <div className="nomargin">
          <Navigation />
          <div className="app-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
