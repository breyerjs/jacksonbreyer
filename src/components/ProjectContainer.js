"use strict";
import React from 'react';
export default class ProjectContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {isOpen: false};
  }
  render() {
      if (this.state.isOpen){
        return this.renderOpen();
      }
      else{
        return this.renderClosed();
      }
  }
  renderClosed(){
    return (
        <div className='project-container'>
            <div className='project-title'>
                {this.props.title}
                {this.renderRepoIcon()}
                {this.renderLiveLink()}
            </div>

            <div className='project-description'>{this.props.description + " "} </div>
            <a
                href='#'
                onClick={() => {this.setState({isOpen: true})}}
                className='project-show-more-less'>
                Show More</a>
      </div>
    );
  }
  renderOpen(){
    return (
      <div className='project-container'>
        <div className='project-title'>
          {this.props.title}
          {this.renderRepoIcon()}
          {this.renderLiveLink()}
        </div>
          {this.props.projectContent} <br />
          <a
            href='#'
            onClick={() => {this.setState({isOpen: false})}}
            className='project-show-more-less'>
            Show Less</a>
      </div>
    );
  }

  renderRepoIcon(){
      if (this.props.repo){
          return (
              <a href={this.props.repo} target="_blank">
                  <img className="project-icon-link" src="/img/GitHub.png"/>
              </a>
          );
      }
      else {
          return "";
      }
  }
  renderLiveLink(){
      if (this.props.liveLink){
          return (
              <a href={this.props.liveLink} target="_blank">
                  <img className="project-icon-link" src="/img/url_icon.png"/>
              </a>
          );
      }
      else {
          return "";
      }
  }

}
