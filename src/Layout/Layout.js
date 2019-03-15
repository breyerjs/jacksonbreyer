import React from 'react';

import Navigation from '../Navigation/Navigation';
import HistoryPage from '../HistoryPage/HistoryPage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import InterestsPage from '../InterestsPage/InterestsPage';

import styles from './Layout.scss';

export default class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: PageNames.ABOUT, 
            bigEnough: true};
    }

    // Passed down to nav, so we can change content here
    changeContent(pageName) {
        this.setState({page: pageName});
    }
    
    /**
     * Checks if the screen is big enough. Sets state appropriately.
     * If the screen is too small, we show the error-haiku
     */
    checkSizeRequirement(){
        this.setState({bigEnough: screenIsBigEnough()});
    }

    componentDidMount(){
        // Check the initial screen size
        this.checkSizeRequirement();
        // Add the event listener for checking screen size as it's resized
        window.addEventListener("resize", this.checkSizeRequirement.bind(this));
    }

    render(){
        if (! this.state.bigEnough){
            return (
                <div className={styles.tooSmall}>
                    {"Diminutive screens"}<br />
                    {"cannot render my website."}<br />
                    {"Instead: a haiku."}<br />
                    {"—Jackson"}<br /><br />
                    {"p.s. Please open this in a bigger window :)"}
                </div>
            );
        }

        return (
            <div className={styles.layoutContainer}>
                <Navigation changePage={this.changeContent.bind(this)} currentPage={this.state.page} />
                <div className={styles.contentContainer}>
                    {buildContent(this.state.page)}
                </div>
            </div>
        );
    };
}

/**
 * Names of the pages we can show
 */
export const PageNames = {
    ABOUT: 'About',
    HISTORY: 'History',
    PROJECTS: 'Projects',
    INTERESTS: 'Interests'
}

/**
 * 
 * @param {string} page 
 * Answers the question: what content should we show in the viewer.
 * Page will be one of PageNames, above
 */
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