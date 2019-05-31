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


/**
 * Gut check heuristic as to whether the screen is big enough.
 * There's no science here. I just picked numbers that seemed big enough.
 */
const screenIsBigEnough = () => {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return x + y > 800 && x > 400 && y > 400;
}

// TODO: Something like...
// Add the event listener for checking screen size as it's resized
//window.addEventListener("resize", this.checkSizeRequirement.bind(this));

ReactDOM.render(
    <Router>
        <section>
            <Route exact path="/" render={(props) => <LandingPage {...props} fullSizeScreen={screenIsBigEnough()} />} />
            <Route path="/technical" render={(props) => <TechnicalPage {...props} fullSizeScreen={screenIsBigEnough()} />} />
            <Route path="/projects" render={(props) => <ProjectsPage {...props} fullSizeScreen={screenIsBigEnough()} />} />
            <Route path="/history" render={(props) => <HistoryPage {...props} fullSizeScreen={screenIsBigEnough()} />} />

            <Route exact path="/blog" component={BlogList} />
            <Route exact path="/about" component={BlogList} />

            <Route path="/blog/:postId" component={BlogPost} />
        </section>
    </Router>,
    document.getElementById("index")
);
