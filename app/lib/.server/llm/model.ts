import { createAnthropic } from '@ai-sdk/anthropic';

export function getAnthropicModel(apiKey: string) {
  const anthropic = createAnthropic({
    baseURL: 'http://127.0.0.1/v1',
    apiKey,
  });

  return anthropic('claude-3-5-sonnet-20240620');
}
