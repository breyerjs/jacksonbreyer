import React from 'react';
import Link from 'next/link';
import Header from './components/shared/Header/Header';
import Layout from './components/shared/Layout/Layout';
import matter from 'gray-matter';
import moment from 'moment';
import styles from './words.module.scss'


const Words = (props) => {
    const postList = props.posts;
    // Sorts the posts so recent ones appear first
    postList.sort((a, b) => a.frontmatter.date > b.frontmatter.date ? -1 : 1 );
    return(
        <div>
            <Header titleText={'Jackson Breyer'} subheader={"sometimes writes down his thoughts"} />
            <Layout>
                {postList.map( (post) => createWordsEntryNew(post))}
            </Layout>
        </div>
    );
};

const createWordsEntryNew = (post) => {
  return (
      <Link href={'words/[wordsid]'} as={`/words/${post.slug}`}> 
        <a className={styles.postEntry}>
            <span> {post.frontmatter.title} </span>
            <span className={styles.separator} />
            <span className={styles.postDate}> 
              {moment(post.frontmatter.date).format('MMM Do, YYYY')} 
            </span>
        </a>
      </Link>
  );
}

export async function getStaticProps() {
  
    const posts = ((context) => {
      const keys = context.keys()
      const values = keys.map(context)
  
      const data = keys.map((key, index) => {
        let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
        const value = values[index]
        const document = matter(value.default)
        return {
          frontmatter: document.data,
          markdownBody: document.content,
          slug,
        }
      })
      return data
    })(require.context('../posts', true, /\.md$/))
  
    return {
      props: {
        posts,
      },
    }
  }

export default Words;


