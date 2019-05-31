import React from 'react';
import { withRouter } from 'react-router-dom'
import BlogPost from '../BlogPost/BlogPost';
import BlogList from '../BlogList/BlogList';
import Header from '../../SharedComponents/Header/Header';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import styles from './BlogFrame.scss';
import classNames from 'classnames';

class BlogFrame extends React.Component {
    buildNavigation(){
        const pages = [
            {
                title: 'All Posts',
                route: '/blog'
            },
            {
                title: 'Main Site',
                route: '/'
            }
        ];

        const currentPage = pages.find((page) => page.route === this.props.location.pathname).title;

        return(
            <Navigation pages={pages} currentPage={currentPage} usesRouter />
        )
    }

    render() {
        return (
            <div className={styles.frameContainer}>
                {this.buildNavigation()}
                <div className={styles.scrollContainer}>
                    <div className={styles.contentContainer}>
                        <Header blogSite titleText={"Jackson's Blog"} />
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
};

// Injects the router so we can get the current route
export default withRouter(props => <BlogFrame {...props} />)
