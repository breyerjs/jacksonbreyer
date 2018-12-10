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
     */
    checkSizeRequirement(){
        if (screenIsBigEnough()){
            this.setState({bigEnough: true});
            return;
        }
        this.setState({bigEnough: false})        
    }

    componentDidMount(){
        this.checkSizeRequirement();
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
                    {"p.s. Please open this on a bigger screen ;)"}
                </div>
            );
        }

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

const screenIsBigEnough = () => {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return x + y > 1550 && x > 600 && y > 600;
}