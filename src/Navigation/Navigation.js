import React from 'react';
import styles from './Navigation.css';

import { PageNames } from '../Layout/Layout';
import classNames from 'classnames';

export default class Navigation extends React.Component {
    generateNavCell(text, firstCell){
        const classes = classNames(
            // Apply the gridlines
            firstCell ? styles.leftNavCell : styles.notLeftNavCell,
            // Highlight the current page
            this.props.currentPage === text ? styles.currentPage : null
        );
        return(
            // This onclick handles the navigation events
            <div className={classes} onClick={() => this.props.changePage(text)}>
                <span className={styles.navText}>{text}</span>
            </div>
        )
    }
    render(){
        return (
            <div className={styles.navContainer}>
                {this.generateNavCell(PageNames.ABOUT, true)}
                {this.generateNavCell(PageNames.HISTORY, false)}
                {this.generateNavCell(PageNames.PROJECTS, false)}
                {this.generateNavCell(PageNames.INTERESTS, false)}
            </div>

        );
    }
};