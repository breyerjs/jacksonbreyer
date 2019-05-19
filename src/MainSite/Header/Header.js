import React from 'react';
import styles from './Header.scss'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.headerContainer}>
                <div className={styles.title}>Jackson Breyer</div>
                <div>...{this.props.subheader}</div>
            </div>
        );
    }
};