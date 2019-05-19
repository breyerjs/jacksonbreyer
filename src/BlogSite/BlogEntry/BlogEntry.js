import React from 'react';
import EntriesRegistry from '../EntriesRegistry';

export default class BlogEntry extends React.Component {
    getEntryOrDefault(entryName) {
        return EntriesRegistry[entryName] ? EntriesRegistry[entryName] : EntriesRegistry['postnotfound'];
    }

    render(){
        return this.getEntryOrDefault(this.props.match.params.entryName);
    }
};
