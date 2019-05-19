import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './MainSite/Layout/Layout';
import BlogList from './BlogSite/BlogList/BlogList';
import BlogPost from './BlogSite/BlogPost/BlogPost';

import styles from './index.scss';

ReactDOM.render(
    <Router>
        <section>
            <Route exact path="/" component={Layout} />
            <Route exact path="/blog" component={BlogList} />
            <Route path="/blog/:postId" component={BlogPost} />
        </section>
    </Router>,
    document.getElementById("index")
);
