"use strict";
import React from 'react';
import ProjectContainer from './ProjectContainer';
import AutomaticAuthor from './projects/AutomaticAuthor';
import Smild from './projects/Smild';
import Typemeasure from './projects/Typemeasure';
import Wikification from './projects/Wikification';
export default class ProjectsPage extends React.Component {
  render() {
        return (
            <div>
                <h2 className='title-text'>projects</h2>
                <AutomaticAuthor />
                <Smild />
                <Typemeasure />
                <Wikification />
            </div>
    );
  }



}
