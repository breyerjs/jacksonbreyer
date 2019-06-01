import React from 'react';
import styles from './Navigation.scss';
import { Link } from 'react-router-dom'
import { CSSTransition } from "react-transition-group";
import classNames from 'classnames';
import hamburger from './hamburger.png'


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
 * fullSizeScreen: whether we're rendering a small (mobile) screen or not.
 */
export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            showMenu: this.props.fullSizeScreen,
        }
    }
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
    toggleMenu(){
        this.setState({showMenu: !this.state.showMenu});
    }
    render(){
        return (
            <div className={styles.navContainer}>
                {this.state.showMenu &&
                    this.props.pages.map((page) => this.generateNavCell(page.title, page.route ))
                }
                {! this.props.fullSizeScreen && 
                    <img className={styles.hamburgerMenu} onClick={() => this.toggleMenu()} src={hamburger} />
                }

            </div>
        );
    }
};
