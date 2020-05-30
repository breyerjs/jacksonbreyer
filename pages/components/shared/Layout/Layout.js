import React from 'react';
import styles from './Layout.scss';

class Layout extends React.Component{
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
