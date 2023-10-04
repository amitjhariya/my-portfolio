import Head from "next/head";
import Layout from "../components/Layout/Particles";
import HomeComponent from "../components/Home";
import axios from 'axios'

export default function Home ({ open }) {

  (async () => {

    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "c621b3eb65c60a1372e63a73553d697b202e9c134f9620e23b0acadec922a54fc23b436262a9a00f7c8ce2358dc362a518ee157bc3a118822c0487467210e320676e");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "questionText": "Where ?",
      "namespace": "criteria-marketing-prod-v1",
      "companyAccountId": 12345,
      "platformUserId": 12345
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3000/api/support/SubmitQuestion", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  })()


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
      <Layout open={open} >
        <HomeComponent />
      </Layout>
    </div>
  );
}
