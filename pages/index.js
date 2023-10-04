import Head from "next/head";
import Layout from "../components/Layout/Particles";
import HomeComponent from "../components/Home";

export default function Home ({ open }) {
  
  (async () => {
    const headers = {
      "Content-Type": "application/json",
      "x-api-key":"c621b3eb65c60a1372e63a73553d697b202e9c134f9620e23b0acadec922a54fc23b436262a9a00f7c8ce2358dc362a518ee157bc3a118822c0487467210e320676e"
    
    }

    const raw = JSON.stringify({
      questionText: "Where is Criteria Corp?",
      namespace: "criteria-marketing-prod-v1",
      companyAccountId: 12345,
      platformUserId: 12345,
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://criteria-gpt-chat-ui-git-feature-api-endpo-e28fed-criteria-corp.vercel.app/api/support/SubmitQuestion",
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    console.log(data);
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
        <HomeComponent/>
      </Layout>
    </div>
  );
}
