import Head from "next/head";
import Layout from "../components/Layout/Particles";
import HomeComponent from "../components/Home";
import axios from 'axios'
import AboutUs from "../components/About";

export default function Home ({ open }) {


  return (
    <div>
      <Head>
        <title>Amit Jhariya - Software Engineer </title>
        <meta
          name="description"
          content="Senior Software Engineer with experience in Frontend development using React and Next JS, and Backend development using Node.JS, Express.JS,"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout open={open} >
        <HomeComponent />
        <AboutUs />
      </Layout>
    </div>
  );
}
