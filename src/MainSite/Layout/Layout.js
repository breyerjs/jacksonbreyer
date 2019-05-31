import React from 'react';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import SmallScreen from '../SmallScreen/SmallScreen';
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
    constructor(props) {
        super(props);
    }

    buildNavigation(){
        return(
            <Navigation pages={pages} currentPage={this.props.location.pathname} />
        )
    }

    render(){
        return (
            <div className={styles.layoutContainer}>
                {this.buildNavigation()}
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
