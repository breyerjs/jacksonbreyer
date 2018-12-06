"use strict";
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import InterestsPage from './components/InterestsPage';
import ProjectsPage from './components/ProjectsPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="contact" component={ContactPage}/>
    <Route path="interests" component={InterestsPage}/>
    <Route path="projects" component={ProjectsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;