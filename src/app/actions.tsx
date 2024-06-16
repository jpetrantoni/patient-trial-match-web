import Instructor from "@instructor-ai/instructor";
import OpenAI from "openai";
import { z } from "zod";

const oai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? undefined,
  organization: process.env.OPENAI_ORG_ID ?? undefined,
});

const client = Instructor({
  client: oai,
  mode: "FUNCTIONS",
});

const TrialSchema = z.object({
  // Description will be used in the prompt
  title: z.string().describe("The title of the clinical trial"),
  description: z.string().describe("The description of the clinical trial"),
});

export async function getTrial() {
  // User will be of type z.infer<typeof UserSchema>
  const trial = await client.chat.completions.create({
    messages: [{ role: "user", content: "Generate a random clinical trial" }],
    model: "gpt-3.5-turbo",
    response_model: {
      schema: TrialSchema,
      name: "Trial",
    },
  });

  console.log(trial);
  // { age: 30, name: "Jason Liu" }
  return trial;
}
