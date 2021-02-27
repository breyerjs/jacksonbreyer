import Head from 'next/head';
import Header from './components/shared/Header/Header';
import Layout from './components/shared/Layout/Layout';

export default function Home() {
  return (
    <div>
        <Layout>
            <Header titleText={'Jackson Breyer'} subheader={"is an engineering manager"} />
            <p>Hello, my name is Jackson. I'm an Engineering Manager at Yelp, where I lead the team responsible for Search Experience across Android, iOS and Web. When I'm not doing that, I enjoy writing, hiking, martial arts, and a host of other hobbies. Thanks for stopping by.</p>
        </Layout>
    </div>
  )
}
