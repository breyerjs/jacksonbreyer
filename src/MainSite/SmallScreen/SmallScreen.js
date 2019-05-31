// If we detect a small screen (probably mobile) then render 
//this mobile-optimized version of the site

import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import styles from './SmallScreen.scss';
import TechnicalPage from '../TechnicalPage/TechnicalPage';
import HistoryPage from '../HistoryPage/HistoryPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import LandingPage from '../LandingPage/LandingPage';

export default class SmallScreen extends React.Component {

    render(){
        // TODO: Better solution for the dividers below (<hr />)
        return (
            <div className={styles.mainContainer}>
                <Header titleText={'Jackson Breyer'} subheader={"is a software engineer"} />
                <LandingPage />
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
