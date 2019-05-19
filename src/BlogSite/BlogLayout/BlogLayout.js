import React from 'react';
import EntriesRegistry from '../EntriesRegistry';

export default class BlogLayout extends React.Component {

    render(){
        const allPosts = Object.keys(EntriesRegistry).map((entry) => EntriesRegistry[entry]);
        return (
            <div>
                {allPosts}
            </div>
        );
    }
};
