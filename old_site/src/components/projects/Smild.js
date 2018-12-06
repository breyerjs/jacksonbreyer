"use strict";
import React from 'react';
import ProjectContainer from '../ProjectContainer';

export default class Smild extends React.Component {
  render() {
    return (
        <ProjectContainer
            title="smild"
            description={"Micro journaling to promote happiness in tough times"}
            repo={"https://github.com/breyerjs/Smild/tree/master/OneGoodThing/app"}
            projectContent={this.contentBody()} />
    );
  }

  contentBody() {
      return(
          <div>
              <p>The concept of keeping a <a href="https://en.wikipedia.org/wiki/Gratitude_journal">gratitude journal</a> has been around for a while, but I wanted to approach the idea from a different angle. I ended up making Smil'd, which is an Android app that lets users record happy moments from their day. Then later, if the user is feeling down, they can review their list in a few formats.</p>

              <p>I collaborated with a designer to make it as friendly-looking as possible. We had a lot of fun with the project. </p>

              <p><img id="smild_pic" src="/img/smild.png" /></p>
          </div>
      );
  }
  deleted(){
      return (<p><img id="autoauthor_pic" src="/img/autoauthor.png" /></p>);
  }
}
