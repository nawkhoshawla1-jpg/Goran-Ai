'use server';
/**
 * @fileOverview A Genkit flow for GoranAI to receive Kurdish messages and respond in Kurdish.
 *
 * - sendKurdishMessageAndReceiveResponse - A function that handles sending a Kurdish message and receiving an AI response.
 * - SendKurdishMessageAndReceiveResponseInput - The input type for the sendKurdishMessageAndReceiveResponse function.
 * - SendKurdishMessageAndReceiveResponseOutput - The return type for the sendKurdishMessageAndReceiveResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SendKurdishMessageAndReceiveResponseInputSchema = z.object({
  kurdishMessage: z.string().describe('The user\'s message in Kurdish.'),
});
export type SendKurdishMessageAndReceiveResponseInput = z.infer<typeof SendKurdishMessageAndReceiveResponseInputSchema>;

const SendKurdishMessageAndReceiveResponseOutputSchema = z.object({
  aiResponse: z.string().describe('GoranAI\'s response in Kurdish.'),
});
export type SendKurdishMessageAndReceiveResponseOutput = z.infer<typeof SendKurdishMessageAndReceiveResponseOutputSchema>;

export async function sendKurdishMessageAndReceiveResponse(input: SendKurdishMessageAndReceiveResponseInput): Promise<SendKurdishMessageAndReceiveResponseOutput> {
  return sendKurdishMessageAndReceiveResponseFlow(input);
}

const sendKurdishMessageAndReceiveResponsePrompt = ai.definePrompt({
  name: 'sendKurdishMessageAndReceiveResponsePrompt',
  input: {schema: SendKurdishMessageAndReceiveResponseInputSchema},
  output: {schema: SendKurdishMessageAndReceiveResponseOutputSchema},
  prompt: `تۆ GoranAI، یاریدەدەری زیرەکی دەستکردیت. وەڵامی پرسیاری بەکارهێنەر بدەوە بە زمانی کوردی، بە شێوەیەکی سروشتی و یارمەتیدەر.\n\nبەکارهێنەر دەڵێت: {{{kurdishMessage}}}`,
});

const sendKurdishMessageAndReceiveResponseFlow = ai.defineFlow(
  {
    name: 'sendKurdishMessageAndReceiveResponseFlow',
    inputSchema: SendKurdishMessageAndReceiveResponseInputSchema,
    outputSchema: SendKurdishMessageAndReceiveResponseOutputSchema,
  },
  async (input) => {
    const {output} = await sendKurdishMessageAndReceiveResponsePrompt(input);
    return output!;
  }
);
