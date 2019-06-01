import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './MainSite/Layout/Layout';
import BlogList from './BlogSite/BlogList/BlogList';
import BlogPost from './BlogSite/BlogPost/BlogPost';

import styles from './index.scss';
import LandingPage from "./MainSite/LandingPage/LandingPage";
import TechnicalPage from "./MainSite/TechnicalPage/TechnicalPage";
import ProjectsPage from "./MainSite/ProjectsPage/ProjectsPage";
import HistoryPage from "./MainSite/HistoryPage/HistoryPage";

// TODO: Something like...
// Add the event listener for checking screen size as it's resized
//window.addEventListener("resize", this.checkSizeRequirement.bind(this));

ReactDOM.render(
    <Router>
        <section>
            <Route exact path="/" component={LandingPage} />
            <Route path="/technical" component={TechnicalPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/history" component={HistoryPage} />

            <Route exact path="/blog" component={BlogList} />
            <Route exact path="/about" component={BlogList} />

            <Route path="/blog/:postId" component={BlogPost} />
        </section>
    </Router>,
    document.getElementById("index")
);
