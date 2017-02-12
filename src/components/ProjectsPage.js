"use strict";
import React from 'react';
export default class ProjectsPage extends React.Component {
  render() {
        return (
            <div>
                <h2 className='title-text'>projects</h2>
                <ul>
                    <li>automatic author identification (<u><a href="https://github.com/breyerjs/Automatic_Author_Identification" className="normal-link">github repo</a></u>)</li>
                        <p>Can we determine who wrote a novel, just by analyzing its writing style?</p>

                        <p>That's the question I set out to answer with this NLP project. I used a corpus of novels from <a href="http://www.gutenberg.org/" className="normal-link">Gutenberg.org</a>, some of which I tagged with their author, some of which I left untagged. I featurized all of the novels and used a Maximum Entropy Classifier to identify the authors of the untagged novels. Essentially, each author became a class, and I sorted the untagged novels into one of these classes.</p>

                        <p>So what makes an author's writing unique? The trick was choosing the correct features. To speed up the runtime, I explored several possibilities using the bag-of-words model. To my surprise, the best feature by far was the relative frequency of the most frequent words.</p>

                        <p>Take an example where my very most frequent word (MFW_1) is 'the', appearing 30% of the time. My second most frequent word (MFW_2) is 'of', appearing 10% of the time. Then we can say that their relative frequency is 0.3 - 0.1 = 0.2. So our feature MFW_1-MFW_2 would be set to 0.2. These relationships were very powerful when generalized to an author's 5 most frequent words.</p>

                        <p>Here's a printout of the results:</p>
                        <p><img id="autoauthor_pic" src="/img/autoauthor.png" /></p>

                    <li>smil'd (<u><a href="https://github.com/breyerjs/Smild/tree/master/OneGoodThing/app" className="normal-link">github repo</a></u>)</li>

                        <p>The concept of keeping a <u><a href="https://en.wikipedia.org/wiki/Gratitude_journal" className="normal-link">gratitude journal</a></u> has been around for a while, but I wanted to approach the idea from a different angle. I ended up making Smil'd, which is an Android app that lets users record happy moments from their day. Then later, if the user is feeling down, they can review their list in a few formats.</p>

                        <p>I collaborated with a designer to make it as friendly-looking as possible. We had a lot of fun with the project. </p>

                        <p><img id="smild_pic" src="/img/smild.png" /></p>

                    <li>wikification for the whole web</li>
                        <p>Wouldn't it be cool if every site you visited had Wikipedia's links to related pages? The idea behind this project was to make a simple web app where a user enters a url and gets back the corresponding page with Wikipedia's blue relations links added.<br />

                        <div align="center"> 
                            <figure id="wikification_figure">
                                <img src="img/wikification.png" id="wikification_pic" />
                                <figcaption>Wikipedia uses links in body text to connect related concepts</figcaption>
                            </figure>
                        </div></p>

                        <p>From a high level, here's the flow. A user lands on a welcome page, where they enter a url. Then the web app makes a request to that url and intercepts the response. It finds all of the visible, non-link text and extracts all of the phrases that ought to be turned into links. Then it runs those against the Wikipedia API and finds the corresponding Wikipedia page. It wraps the links around the target phrases and then returns the response to the user, with the new links added.</p>

                        <p>This project opened up many interesting technical and linguistic problems. For instance, which phrases are worth linking to? If my text is "happiness and iPods", do I just add a link to "iPods"? Or just to "happiness"? Or both? Where do we draw the line between "interesting mention" and "uninteresting mention"?</p>

                        <p>I decided that a good middle ground would be to use Named Entity Recognition (NER). NER is a canonical NLP problem that uses machine learning to identify named entities. For instance, phrases like "Steve Jobs" and "iPod" would be selected, but "happiness" would not. I used the Stanford Core NLP NER package to do this.</p>

                        <p>Another interesting problem was how to disambiguate identical phrases. For instance, "Chicago" can refer to the band, the city, the football team, and so forth. I found the 20 most likely entries on Wikipedia via their search API decided which article was most appropriate. In particular, I used the target phrase and surrounding context as input to a tf-idf calculation against the bodies of the Wikiepdia articles. This ended up working quite well.</p>

                </ul>
            </div>
    );
  }
}