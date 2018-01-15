"use strict";
import React from 'react';
import ProjectContainer from '../ProjectContainer';

export default class AutomaticAuthor extends React.Component {
  render() {
    return (
        <ProjectContainer
            title="automatic author identification"
            description={"Can we determine who wrote a novel, just by analyzing its writing style?"}
            repo={"https://github.com/breyerjs/Automatic_Author_Identification"}
            projectContent={this.contentBody()} />
    );
  }

  contentBody() {
      return(
          <div>
              <p>Can we determine who wrote a novel, just by analyzing its writing style?</p>

              <p>That's the question I set out to answer with this NLP project. I used a corpus of novels from <a href="http://www.gutenberg.org/" className="normal-link">Gutenberg.org</a>, some of which I tagged with their author, some of which I left untagged. I featurized all of the novels and used a Maximum Entropy Classifier to identify the authors of the untagged novels. Essentially, each author became a class, and I sorted the untagged novels into one of these classes.</p>

              <p>So what makes an author's writing unique? The trick was choosing the correct features. To speed up the runtime, I explored several possibilities using the bag-of-words model. To my surprise, the best feature by far was the relative frequency of the most frequent words.</p>

              <p>Take an example where my very most frequent word (MFW_1) is 'the', appearing 30% of the time. My second most frequent word (MFW_2) is 'of', appearing 10% of the time. Then we can say that their relative frequency is 0.3 - 0.1 = 0.2. So our feature MFW_1-MFW_2 would be set to 0.2. These relationships were very powerful when generalized to an author's 5 most frequent words.</p>
          </div>
      );
  }
  deleted(){
      return (<p><img id="autoauthor_pic" src="/img/autoauthor.png" /></p>);
  }
}
