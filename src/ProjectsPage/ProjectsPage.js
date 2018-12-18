import React from 'react';
import Header from '../Header/Header';
import ProjectViewer from './ProjectViewer';
import styles from './ProjectsPage.scss';   

const allProjects = [
    (<ProjectViewer
        title={'Projects Are Coming Soon'}
        image={'null'}
        tldr={'Keep an eye out!'}
        text={'This is where projects will be.'}
    />),
];

export default class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projIndex: 0,
        };
    }

    /**
     * 
     * @param {int} indexChange amount to change the index of the current project
     */
    handleOnManiculeClick(indexChange) {
        const newIndex = (this.state.projIndex + indexChange) === -1 ? 
            // we have cycled around backwards
            allProjects.length -1 : 
            // cycle back to beginning if we reach the end, otherwise increment
            (this.state.projIndex + indexChange) % allProjects.length;

        this.setState({projIndex: newIndex});
    }

    render() {
        return (
            <div>
                <Header subheader={"likes to keep busy"} />
                <div className={styles.projNavContainer}>
                    <span className={styles.maniculeSpan}>
                        <a onClick={() => this.handleOnManiculeClick(-1)}>☜ Prev</a>
                    </span>
                    <span className={styles.btwnPrevAndNext} />
                    <span className={styles.maniculeSpan}>
                        <a onClick={() => this.handleOnManiculeClick(1)}>Next ☞</a>
                    </span>
                </div>
                <div>
                    {allProjects[this.state.projIndex]}
                </div>
            </div>
        );
    }
}
