import React from 'react';
import styles from './Header.scss'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.blogSite ? styles.headerContainerBlogSite : styles.headerContainerMainSite}>
                <div className={styles.title}>{this.props.titleText}</div>
                {this.props.subheader && <div className={styles.subheader}>...{this.props.subheader}</div>}
            </div>
        );
    }
};
