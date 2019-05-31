import React from 'react';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import HistoryPage from '../HistoryPage/HistoryPage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import TechnicalPage from '../TechnicalPage/TechnicalPage';
import SmallScreen from '../SmallScreen/SmallScreen';

import styles from './Layout.scss';

/**
 * Names of the pages we can show
 */
export const PageNames = {
    ABOUT: 'About',
    TECHNICAL: 'Technical',
    PROJECTS: 'Projects',
    HISTORY: 'History'
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
            return <AboutPage fullSizeScreen />;
        case PageNames.HISTORY:
            return <HistoryPage fullSizeScreen />;
        case PageNames.PROJECTS:
            return <ProjectsPage fullSizeScreen />;
        case PageNames.TECHNICAL:
            return <TechnicalPage fullSizeScreen />;
        default:
            return <AboutPage fullSizeScreen />;
    }
}

export default class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: PageNames.ABOUT, 
            bigEnough: true
        };
    }

    // Passed down to nav, so we can change content here
    changePage(pageName) {
        this.setState({page: pageName});
    }

    buildNavigation(){
        const pages = Object.keys(PageNames).map((pageName) => {
            const pageString = PageNames[pageName];
            return ({
                title: pageString,
                onClickHandler: () => this.changePage(pageString)
            });
        })
        
        return(
            <Navigation pages={pages} currentPage={this.state.page} />
        )
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
                <SmallScreen />
            );
        }

        return (
            <div className={styles.layoutContainer}>
                {this.buildNavigation()}
                <div className={styles.scrollContainter}>
                    <div className={styles.contentContainer}>
                        {buildContent(this.state.page)}
                    </div>
                </div>
            </div>
        );
    };
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