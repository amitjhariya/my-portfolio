
export default async function handler(req, res) {
  try {

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
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
