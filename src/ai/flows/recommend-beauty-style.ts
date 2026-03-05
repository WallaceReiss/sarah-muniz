'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating personalized beauty style recommendations.
 *
 * - recommendBeautyStyle - An asynchronous function that provides personalized style recommendations.
 * - RecommendBeautyStyleInput - The input type for the recommendBeautyStyle function.
 * - RecommendBeautyStyleOutput - The return type for the recommendBeautyStyle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendBeautyStyleInputSchema = z.object({
  serviceType: z
    .enum(['hair', 'makeup', 'nails'])
    .describe('The type of beauty service the user is interested in (hair, makeup, or nails).'),
  occasion: z
    .string()
    .describe(
      'The occasion for which the style is needed (e.g., casual, formal, wedding, everyday).'
    ),
  desiredLook: z
    .string()
    .describe(
      'A description of the desired aesthetic or mood (e.g., natural, glamorous, bold, subtle, edgy).'
    ),
  userDescription: z
    .string()
    .describe(
      'A description of the user\u0027s current features or preferences relevant to the service type (e.g., hair length/texture, skin tone, eye color, nail length/shape).'
    ),
});
export type RecommendBeautyStyleInput = z.infer<typeof RecommendBeautyStyleInputSchema>;

const RecommendBeautyStyleOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      styleName: z.string().describe('The name of the recommended style.'),
      description: z.string().describe('A detailed description of the recommended style.'),
      reasoning: z
        .string()
        .describe('The reasoning behind why this style is suitable based on user preferences.'),
    })
  ),
});
export type RecommendBeautyStyleOutput = z.infer<typeof RecommendBeautyStyleOutputSchema>;

const recommendBeautyStylePrompt = ai.definePrompt({
  name: 'recommendBeautyStylePrompt',
  input: {schema: RecommendBeautyStyleInputSchema},
  output: {schema: RecommendBeautyStyleOutputSchema},
  prompt: `You are an expert beauty stylist specializing in personalized recommendations for hair, makeup, and nails.

Based on the user's preferences, provide 2-3 unique and detailed style recommendations.

User Preferences:
Service Type: {{{serviceType}}}
Occasion: {{{occasion}}}
Desired Look: {{{desiredLook}}}
My Features/Preferences: {{{userDescription}}}

For each recommendation, include a 'styleName', 'description', and 'reasoning' explaining why it suits the user's input.
Ensure the recommendations are creative, practical, and align with modern beauty trends while considering the user's specific features and desired outcome.
`,
});

const recommendBeautyStyleFlow = ai.defineFlow(
  {
    name: 'recommendBeautyStyleFlow',
    inputSchema: RecommendBeautyStyleInputSchema,
    outputSchema: RecommendBeautyStyleOutputSchema,
  },
  async input => {
    const {output} = await recommendBeautyStylePrompt(input);
    return output!;
  }
);

export async function recommendBeautyStyle(
  input: RecommendBeautyStyleInput
): Promise<RecommendBeautyStyleOutput> {
  return recommendBeautyStyleFlow(input);
}
