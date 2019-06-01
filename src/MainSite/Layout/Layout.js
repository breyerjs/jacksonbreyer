import React from 'react';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import { withRouter } from 'react-router-dom'
import styles from './Layout.scss';

// Pages we can render. We'll feed these into Navigation.
const pages = [
    {
        title: 'Landing',
        route: '/'
    },
    {
        title: 'Technical',
        route: '/technical'
    },
    {
        title: 'Projects',
        route: '/projects'
    },
    {
        title: 'History',
        route: '/history'
    },
];

class Layout extends React.Component{
    render(){
        return (
            <div className={styles.layoutContainer}>
                <Navigation pages={pages} currentPage={this.props.location.pathname} fullSizeScreen={this.props.fullSizeScreen} />
                <div className={styles.scrollContainter}>
                    <div className={styles.contentContainer}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    };
}

export default withRouter(props => <Layout {...props} />)
