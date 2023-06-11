import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: req.body,
    n: 2,
    size: "512x512",
    response_format: "b64_json",
  });
  console.log(response.data.data);
  res.status(200).json({ result: response.data.data[0].b64_json });
}