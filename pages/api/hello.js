// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function  handler (req, res) {

  var myHeaders = new Headers();
  myHeaders.append("User-Agent", "python-requests/2.28.1");
  myHeaders.append("x-api-key", "c621b3eb65c60a1372e63a73553d697b202e9c134f9620e23b0acadec922a54fc23b436262a9a00f7c8ce2358dc362a518ee157bc3a118822c0487467210e320676e");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "questionText": "Where is Criteria Corp?",
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
let data
  
  const response =  await fetch("https://criteria-gpt-chat-ui-git-feature-api-endpo-e28fed-criteria-corp.vercel.app//api/support/SubmitQuestion", requestOptions)
  if (response) {
    data =await response.json()
    console.log(data)
  }
  res.status(200).json(data)
}
