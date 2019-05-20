import React from 'react';
import EntriesRegistry, { PostNotFoundRegistryObject } from '../BlogPostRegistry';
import styles from './BlogPost.scss';
import BlogFrame from '../BlogFrame/BlogFrame';
import { Link } from 'react-router-dom'

export default class BlogPost extends React.Component {
    // Gets the specified post or returns the default 'post not found' placeholder
    getPostOrDefault() {
        let postId = this.props.postId ?
        // Either we're rendering from the 'all posts' page
        this.props.postId 
        // ...or we're in a single post view
        : this.props.match.params.postId;

        return EntriesRegistry[postId] ? 
            EntriesRegistry[postId] : 
            PostNotFoundRegistryObject
    }

    render(){
        const post = this.getPostOrDefault();
        const viewingAllPosts = !!this.props.postId;
        if (viewingAllPosts){
            return (
                <div>
                    <div className={styles.oneOfManyPostsContainer}>
                        <div className={styles.oneOfManyPosts}>
                            <Link to={'/blog/' + post.id} className={styles.title}>{post.title}</Link>
                            <div className={styles.date}>{post.date}</div>
                            <div>{post.component}</div>
                        </div>
                    </div>
                    <Link to={'/blog/' + post.id} className={styles.readMoreLink}>...read more</Link>
                </div>
            );
        }
        return (
            <BlogFrame>
                <div className={styles.title}>{post.title}</div>
                <div className={styles.date}>{post.date}</div>
                <div>{post.component}</div>
            </BlogFrame>
        );
    }
};
