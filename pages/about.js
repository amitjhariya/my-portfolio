import Head from "next/head";
import Layout from "../components/Layout";
import AboutUs from "../components/About";

export default function About({open}) {
 

  return (
    <div>
      <Head>
        <title>Amit Jhariya</title>
        <meta
          name="description"
          content="Senior Software Engineer with experience in Frontend development using React and Next JS, and Backend development using Node.JS, Express.JS,"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout open={open}>
        <AboutUs/>
      </Layout>
    </div>
  );
}
