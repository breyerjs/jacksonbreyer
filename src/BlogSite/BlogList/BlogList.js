import React from 'react';
import EntriesRegistry from '../BlogPostRegistry';
import BlogPost from '../BlogPost/BlogPost';
import BlogFrame from '../BlogFrame/BlogFrame';

export default class BlogList extends React.Component {

    getAllPosts() {
        return (
            Object.keys(EntriesRegistry).map((postId) => {
                return (
                    <div key={EntriesRegistry[postId].title}>
                        <BlogPost postId={postId} />
                    </div>
                );
            })
        );
    }

    render(){
        const allPosts = this.getAllPosts();

        return (
            <BlogFrame>
                {allPosts}
            </BlogFrame>
        );
    }
};
