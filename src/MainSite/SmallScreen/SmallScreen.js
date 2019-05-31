// If we detect a small screen (probably mobile) then render 
//this mobile-optimized version of the site

import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import styles from './SmallScreen.scss';
import AboutPage from '../AboutPage/AboutPage';
import TechnicalPage from '../TechnicalPage/TechnicalPage';
import HistoryPage from '../HistoryPage/HistoryPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

export default class SmallScreen extends React.Component {

    render(){
        // TODO: Better solution for the dividers below (<hr />)
        return (
            <div className={styles.mainContainer}>
                <Header titleText={'Jackson Breyer'} subheader={"is a software engineer"} />
                <AboutPage />
                <hr /><hr />
                <TechnicalPage />
                <hr /><hr />
                <ProjectsPage />
                <hr /><hr />
                <HistoryPage />

            </div>
        );
    }
};
