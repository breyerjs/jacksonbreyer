import React from 'react';
import Header from '../Header/Header'
import styles from './ProjectViewer.css';

/**
 * props:
 * title: title of the project
 * image: string path to an image
 * tldr: a one-line zinger describing that bad boi
 * text: descriptive body text (already rendered with <p> etc)
 */
export default class ProjectViewer extends React.Component {
    render(){
        return(
            <div>
                <div className={styles.projectTitle}>
                    {this.props.title}
                </div>
                <div className={styles.projectTldr}>
                    {this.props.tldr}
                </div>
                <div className={styles.text}>
                    {this.props.text}
                </div>
            </div>
        );
    }
};
