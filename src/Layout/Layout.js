import React from 'react';

import Navigation from '../Navigation/Navigation';
import HistoryPage from '../HistoryPage/HistoryPage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import InterestsPage from '../InterestsPage/InterestsPage';

import styles from './Layout.css';

export default class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {page: PageNames.ABOUT};
    }

    // Passed down to nav, so we can change content here
    changeContent(pageName) {
        this.setState({page: pageName});
    }

    render(){
        return (
            <div className={styles.layoutContainer}>
                <div className={styles.navContainer}>
                    <Navigation changePage={this.changeContent.bind(this)} currentPage={this.state.page} />
                </div>
                <div className={styles.contentContainer}>
                    {buildContent(this.state.page)}
                </div>
            </div>
        );
    };
}

export const PageNames = {
    ABOUT: 'About',
    HISTORY: 'History',
    PROJECTS: 'Projects',
    INTERESTS: 'Interests'
}

// ie., which content should we show?
const buildContent = (page) => {
    switch (page){
        case PageNames.ABOUT:
            return <AboutPage />;
        case PageNames.HISTORY:
            return <HistoryPage />;
        case PageNames.PROJECTS:
            return <ProjectsPage />;
        case PageNames.INTERESTS:
            return <InterestsPage />;
        default:
            return <AboutPage />;
    }
}