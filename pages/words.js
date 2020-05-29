import React from 'react';
import Header from './components/shared/Header/Header';
import Layout from './components/shared/Layout/Layout';

const Words = (props) => {
    return(
        <div>
            <Header titleText={'Jackson Breyer'} subheader={"sometimes writes down his thoughts"} />
            <Layout>
                <p>Coming Soon!</p>
            </Layout>
        </div>
    );
};
export default Words;
