import React from 'react';
import styles from './Navigation.scss';
import { Link } from 'react-router-dom'
import { CSSTransition } from "react-transition-group";
import classNames from 'classnames';
import hamburger from './hamburger.png'

/**
 * Gut check heuristic as to whether the screen is big enough.
 * There's no science here. I just picked numbers that seemed big enough.
 */
export const screenIsBigEnough = () => {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return x + y > 800 && x > 400 && y > 400;
}

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
            showMenu: screenIsBigEnough(),
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
                {!screenIsBigEnough() && 
                    <img className={styles.hamburgerMenu} onClick={() => this.toggleMenu()} src={hamburger} />
                }

            </div>
        );
    }
};
