import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import styles from './LandingPage.scss';
import Layout from '../Layout/Layout';

const LandingPage = (props) => {
    return(
        <Layout>
            <Header titleText={'Jackson Breyer'} subheader={"is a software engineer"} />
            <p>My name is Jackson Breyer and this is my personal website.</p> 
            <p>I'm a full-stack developer on the Search Experience team at Yelp. That means I write all sorts of code, and it gets used by all sorts of people.</p>
            {props.fullSizeScreen &&
                <div>
                    <p>I wasn't always a Software Engineer. If you're interested in that journey, check out the 'History' section.</p>
                    <p>Otherwise, the 'Technical' and 'Projects' pages may be what you're after.</p>            
                </div>
            }
        </Layout>
    );
};
export default LandingPage;