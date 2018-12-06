"use strict";
import React from 'react';
import ProjectContainer from '../ProjectContainer';

export default class Typemeasure extends React.Component {
  render() {
    return (
        <ProjectContainer
            title="typemeasure"
            description={"A beautiful typing test"}
            repo={"https://github.com/breyerjs/typequick"}
            liveLink={"https://www.typemeasure.me"}
            projectContent={this.contentBody()} />
    );
  }

  contentBody() {
      return(
          <div>
              <p>I learned to touch-type by taking typing tests over and over. But I didn't find that any of the tests available online were very modern in their design, and the passages they had me type were boring. So I made Typemeasure.</p>

              <p>Since a typing test should make the user more comfortable with the keyboard, Typemeasure is totally keyboard driven. I also find that staring at a white screen for a long period is unpleasant, so I gave it a dark theme to save everyone's eyes. And finally, I chose interesting passages so it wasn't boring to take the tests.</p>
              <p><img id="typemeasure_pic" src="/img/typemeasure.png" /></p>
          </div>
      );
  }
  deleted(){
      return (<p><img id="autoauthor_pic" src="/img/autoauthor.png" /></p>);
  }
}
