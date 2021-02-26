import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Header from '../components/shared/Header/Header';
import Layout from '../components/shared/Layout/Layout';
import Link from 'next/link';
import moment from 'moment';

import styles from './wordsTemplate.module.scss';



export default function WordsTemplate(props) {
    const frontmatter = props.frontmatter;
    const markdownBody = props.markdownBody;
    return(
        <div>
            <Layout>
            <div className={styles.goBackLink}>
                <Link href={'/words'} key={'/words'}> 
                    <a className={styles.backLinkText}> 
                        {'Return to list'} 
                    </a> 
                </Link>
            </div>
                <div className={styles.postHeader}>
                    <div className={styles.postTitle}>{frontmatter.title}</div>
                </div>
                <ReactMarkdown className={styles.markdownBody} source={markdownBody} />
                <div className={styles.postDate}>
                    —{moment(frontmatter.date).format('MMMM Do, YYYY')}
                </div>
            </Layout>
        </div>
    );
};

// Gets the post content we want to render and injects it as props
export async function getStaticProps({ ...ctx }) {
    const { wordsid } = ctx.params
  
    const content = await import(`../../posts/${wordsid}.md`)
    const data = matter(content.default)
  
    return {
      props: {
        frontmatter: data.data,
        markdownBody: data.content,
      },
    }
  }

// Forces us to render these at build time (so they're generated statically)
export async function getStaticPaths() {
    const wordsids = ((context) => {
        const keys = context.keys()
        const data = keys.map((key, index) => {
            let wordsid = key.replace(/^.*[\\\/]/, '').slice(0, -3)
            return wordsid
        })
        return data
    })(require.context('../../posts', true, /\.md$/))

    const paths = wordsids.map((wordsid) => `/words/${wordsid}`)

    return {
        paths,
        fallback: false,
    }
}

// // loads the post data
// WordsTemplate.getInitialProps = async (context) => {
//     const { wordsid } = context.query
    
//     // Import our .md file using the `wordsid` from the URL
//     const content = await import(`../../posts/${wordsid}.md`)
    
//     // Parse .md data through `matter`
//     const data = matter(content.default)

//     // Pass data to the component props
//     return { ...data }    
// }

