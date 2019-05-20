import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import BlogPost from '../BlogPost/BlogPost';
import BlogList from '../BlogList/BlogList';
import BlogHeader from '../BlogHeader/BlogHeader';
import styles from './BlogFrame.scss';
import classNames from 'classnames';

class BlogFrame extends React.Component {
    generateNavCell(text, route){
        const classes = classNames(
            // Apply the gridlines
            styles.navCell,
            this.props.location.pathname === '/blog' && text==='All Posts' ? styles.currentPage : null,
        );
        return (
            <Link to={route} className={classes}>
                <span className={styles.navText}>{text}</span>
            </Link>
        )
    }

    render() {
        return (
            <div className={styles.frameContainer}>
                <div className={styles.navContainer}>
                    {this.generateNavCell('All Posts', '/blog')}
                    {this.generateNavCell('Main Site', '/')}
                </div>
                <div className={styles.scrollContainer}>
                    <div className={styles.contentContainer}>
                        <BlogHeader />
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
};

// Injects the router so we can get the current route
export default withRouter(props => <BlogFrame {...props} />)