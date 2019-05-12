import React from 'react';
import styles from './Navigation.scss';

import { PageNames } from '../Layout/Layout';
import classNames from 'classnames';

export default class Navigation extends React.Component {
    generateNavCell(text){
        const classes = classNames(
            // Apply the gridlines
            styles.navCell,
            // Highlight the current page
            this.props.currentPage === text ? styles.currentPage : null
        );
        return (
            // This onclick handles the navigation events
            <div className={classes} onClick={() => this.props.changePage(text)}>
                <span className={styles.navText}>{text}</span>
            </div>
        )
    }
    render(){
        return (
            <div className={styles.navContainer}>
                {this.generateNavCell(PageNames.ABOUT)}
                {this.generateNavCell(PageNames.TECHNICAL)}
                {this.generateNavCell(PageNames.PROJECTS)}
                {this.generateNavCell(PageNames.HISTORY)}
            </div>

        );
    }
};