import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const configuration = new Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${req.body.prompt}\n\n-`,
    temperature: 0,
    max_tokens: 2500,
    top_p: 1,
    stop: ["\n"],
  });

  const response = completion.data.choices[0].text;
  res.status(200).json({ response: response })
}