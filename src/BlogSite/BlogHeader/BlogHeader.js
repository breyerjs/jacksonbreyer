import React from 'react';
import styles from './BlogHeader.scss'

export default class BlogHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.headerContainer}>
                <div className={styles.title}>Jackson's Blog</div>
            </div>
        );
    }
};