import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './MainSite/Layout/Layout';
import BlogLayout from './BlogSite/BlogLayout/BlogLayout';
import BlogEntry from './BlogSite/BlogEntry/BlogEntry';

import styles from './index.scss';

ReactDOM.render(
    <Router>
        <section>
            <Route exact path="/" component={Layout} />
            <Route exact path="/blog" component={BlogLayout} />
            <Route path="/blog/:entryName" component={BlogEntry} />
        </section>
    </Router>,
    document.getElementById("index")
);
