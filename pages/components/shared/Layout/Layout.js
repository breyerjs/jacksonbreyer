import React from 'react';
import styles from './Layout.scss';
import ReactGA from 'react-ga';

class Layout extends React.Component{
    componentDidMount(){
        // Google analytics
        ReactGA.initialize('UA-149953390-2');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render(){
        return (
            <div className={'layoutContainer'}>
                <div className={'contentContainer'}>
                    {this.props.children}
                </div>
            </div>
        );
    };
}

export default Layout;
