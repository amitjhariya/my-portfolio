import Head from "next/head";
import Layout from "../components/Layout";

export default function Work({ open }) {
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
      <Layout open={open} sty>
        <div>
          <iframe
            src='Resume-Amit_Jhariya.pdf'
            width="80%"
            height="100%"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%",
              border: "none",
              margin: 0,
              padding: 0,
              overflow: "hidden",
              zIndex: 999999,
            }}
          />
        </div>
      </Layout>
    </div>
  );
}
