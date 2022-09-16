import Head from 'next/head';
import Header from './components/shared/Header/Header';
import Layout from './components/shared/Layout/Layout';

export default function Home() {
  return (
    <div>
        <Layout>
            <Header titleText={'Jackson Breyer'} subheader={"is an engineering manager"} />
            <p>Hello, my name is Jackson.</p> 
            <p>I am an Engineering Manager at Yelp. I lead the team responsible for Search Experience across Android, iOS, and Web.</p> 
            <p>I also enjoy reading, writing, hiking, tennis, martial arts, and a host of other hobbies.</p> 
        </Layout>
    </div>
  )
}
