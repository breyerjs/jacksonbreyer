"use strict";
import React from 'react';
import ProjectContainer from '../ProjectContainer';

export default class Wikification extends React.Component {
  render() {
    return (
        <ProjectContainer
            title="wikification for the whole web"
            description={"Adding wikipedia links to an arbitrary webpage"}
            projectContent={this.contentBody()} />
    );
  }

  contentBody() {
      return(
          <div>
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
          </div>
      );
  }
  deleted(){
      return (<p><img id="autoauthor_pic" src="/img/autoauthor.png" /></p>);
  }
}
