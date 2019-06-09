import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import Layout from '../Layout/Layout';
import ProjectViewer from './ProjectViewer';
import styles from './ProjectsPage.scss';   

const allProjects = [
    (<ProjectViewer
        title={'Detecting Authorship with Machine Learning'}
        image={'null'}
        tldr={'Can we determine who wrote a novel, just by analyzing its writing style?'}
        githubLink={'https://github.com/breyerjs/Automatic_Author_Identification'}
        text={(
            <div>
                <p>That's the question I set out to answer with this NLP project. I used a corpus of novels from Gutenberg.org, some of which I tagged with their author, some of which I left untagged. I featurized all of the novels and used a Maximum Entropy Classifier to identify the authors of the untagged novels. Essentially, each author became a class, and I sorted the untagged novels into one of these classes.</p>
                
                <p>So what makes an author's writing unique? The trick was choosing the correct features. To speed up the training, I explored several possibilities using the bag-of-words model. To my surprise, the best feature by far was the relative frequency of the most frequent words.</p>

                <p>Take an example where my very most frequent word (mfw_1) is 'the', appearing 30% of the time. My second most frequent word (mfw_2) is 'of', appearing 10% of the time. Then we can say that their relative frequency is 0.3 - 0.1 = 0.2. So our feature mfw_1-mfw_2 would be set to 0.2. These relationships were very powerful when generalized to an author's 5 most frequent words.</p>
            </div>
        )}
    />),
    (<ProjectViewer
        title={'TypeMeasure'}
        image={'null'}
        tldr={'Towards a beautiful typing test'}
        githubLink={'https://github.com/breyerjs/typequick'}
        liveLink={'https://www.typemeasure.me/'}
        text={(
            <div>
                <p>I learned to touch-type by taking typing tests over and over. But I didn't find that any of the tests available online were very modern in their design, and the passages they had me type were boring. And I also wanted to learn React. So I made TypeMeasure.</p>

                <p>Since a typing test should make the user more comfortable with the keyboard, TypeMeasure is totally keyboard driven. I also find that staring at a white screen for a long period is unpleasant, so I gave it a dark theme to save everyone's eyes. And finally, I chose interesting passages so it wasn't boring to take the tests.</p>
            </div>
        )}
    />),
    (<ProjectViewer
        title={'Ned'}
        image={'null'}
        tldr={'A personal slackbot'}
        githubLink={'https://github.com/breyerjs/ned'}
        text={(
            <div>
                <p>When I was in grad school, my girlfriend and I were doing long-distance from Boston to DC. On a whim, I suggested we try Slack rather than texting, since it was cross platform and I was curious about it. Little did I know it would become the default way we'd 'text' over the next few years, even after we moved back in together.</p>

                <p>{"One of the nice things about programming is that you're able to take agency over systems around you. So I built our slackbot, Ned. He provides a little 'CLI' over some Python modules that make it more fun to chat on Slack. You can tell him to (╯°□°）╯︵ ┻━┻, <3 someone, find recipes for dinner, and he even keeps track of karma (like jackson++ or jackson--)."}</p>

                <p>He's hosted on a Raspberry Pi in my living room—I had a lot of fun setting that up. Though when the power goes out I need to ssh into the pi and kick him off again.</p>
            </div>
        )}
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
            allProjects.length - 1 : 
            // cycle back to beginning if we reach the end, otherwise increment
            (this.state.projIndex + indexChange) % allProjects.length;

        this.setState({projIndex: newIndex});
    }

    render() {
        return (
            <Layout>
                <Header titleText={'Jackson Breyer'} subheader={"likes to keep busy"} />
                <div className={styles.projNavContainer}>
                    <span className={styles.maniculeSpan}>
                        <a onClick={() => this.handleOnManiculeClick(-1)}>{"<< Prev"}</a>
                    </span>
                    <span className={styles.btwnPrevAndNext} />
                    <span className={styles.maniculeSpan}>
                        <a onClick={() => this.handleOnManiculeClick(1)}>{"Next >>"}</a>
                    </span>
                </div>
                <div>
                    {allProjects[this.state.projIndex]}
                </div>
            </Layout>
        );
    }
}
