import React from 'react';
import Test from './Entries/test/Test';
import Test2 from './Entries/test2/Test2';
import PostNotFound from './Entries/PostNotFound/PostNotFound';

// Ideally these should map to objects containing the components, dates, titles, etc
// Then, I can consume those flags in BlogEntry
export default {
    'test': {
        component: <Test />,
        title: 'Test Post',
        date: 'May 19, 2019',
        id: 'test'
    },
    'test2': {
        component: <Test2 />,
        title: 'Test Post 2',
        date: 'May 19, 2019',
        id: 'test2'
    }
};

export let PostNotFoundRegistryObject = {
    title: 'Post Not Found',
    component: <PostNotFound />,
    date: null,
    id: 'not-found'
};