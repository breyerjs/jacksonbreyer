import React from 'react';
import styles from './Navigation.scss';
import { Link } from 'react-router-dom'
import classNames from 'classnames';

/**
 * Expected Props:
 *  pages: list of page objects like so:
 *  [
 *      {
 *          title: <string: page_title>,
 *          route: string route for the 
 *      },
 *  ...
 *  ]
 * currentPage: string route of the current page. Should match a route, above.
 */
export default class Navigation extends React.Component {
    generateNavCell(title, route){
        const classes = classNames(
            // Apply the gridlines
            styles.navCell,
            // Highlight the current page
            this.props.currentPage === route ? styles.currentPage : null
        );
        return (
            <Link to={route} className={classes} key={route}>
                <span className={styles.navText}>{title}</span>
            </Link>
        );
    }
    render(){
        return (
            <div className={styles.navContainer}>
                {this.props.pages.map((page) => this.generateNavCell(page.title, page.route ))}
            </div>

        );
    }
};
