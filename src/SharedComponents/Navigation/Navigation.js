import React from 'react';
import styles from './Navigation.scss';
import { Link } from 'react-router-dom'
import classNames from 'classnames';

/**
 * TODO: Refactor this so we don't use onclicks. We should only use routes.
 * Expected Props:
 *  pages: list of page objects like so:
 *  [
 *      {
 *          title: <string: page_title>,
 *          onClickHandler: <func: what to do on click>
 *          route: string route if we're not using an onlick
 *      },
 *  ...
 *  ]
 * 
 * currentPage: string title of the current page. Should match the title, above.
 */
export default class Navigation extends React.Component {
    generateNavCell(title, onClickHandlerOrRoute){
        const classes = classNames(
            // Apply the gridlines
            styles.navCell,
            // Highlight the current page
            this.props.currentPage === title ? styles.currentPage : null
        );
        if (!this.props.usesRouter){
            return (
                // This onclick handles the navigation events
                <div className={classes} onClick={() => onClickHandlerOrRoute()} key={title}>
                    <span className={styles.navText}>{title}</span>
                </div>
            );
        }
        else{
            return (
                <Link to={onClickHandlerOrRoute} className={classes} key={onClickHandlerOrRoute}>
                    <span className={styles.navText}>{title}</span>
                </Link>
            );
        }
    }
    render(){
        return (
            <div className={styles.navContainer}>
                {this.props.pages.map((page) => this.generateNavCell(page.title, page.onClickHandler ? page.onClickHandler : page.route ))}
            </div>

        );
    }
};
