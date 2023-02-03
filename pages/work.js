import Head from 'next/head'
import Portfolio from '../components/Portfolio';
import Layout from "../components/Layout";

export default function Work({open}) {
  return (
    <div >
      <Head>
        <title>Amit Jhariya</title>
        <meta name="description" content="Senior Software Engineer with experience in Frontend development using React and Next JS, and Backend development using Node.JS, Express.JS," />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout open={open}>
        <Portfolio/>
      </Layout>
      </div>
  )
}