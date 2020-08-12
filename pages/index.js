import Head from 'next/head';
import Header from './components/shared/Header/Header';
import Layout from './components/shared/Layout/Layout';

export default function Home() {
  return (
    <div>
        <Header titleText={'Jackson Breyer'} subheader={"is an engineering manager"} />
        <Layout>
            <p>Hello. My name is Jackson Breyer and this is my personal website.</p> 
            <p>I'm an Engineering Manager at Yelp. There, I lead the team responsible for Search Experience, across Android, iOS and Web. When I'm not doing that, I enjoy writing, hiking, martial arts, and a host of other hobbies.</p>
            <p>Thanks for stopping by my corner of the Internet.</p>
        </Layout>
    </div>
  )
}
