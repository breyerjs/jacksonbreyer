import React from 'react';
import Header from '../Header/Header'
import styles from './ProjectViewer.scss';

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
                <div className={styles.checkOut}>
                    {(this.props.githubLink || this.props.liveLink) && 'Check this out '}
                    {this.props.githubLink && <a href={this.props.githubLink} target="_blank">on Github</a>}
                    {this.props.githubLink && this.props.liveLink && ' & '}
                    {this.props.liveLink && <a href={this.props.liveLink} target="_blank">live on the web</a>}
                </div>
            </div>
        );
    }
};

