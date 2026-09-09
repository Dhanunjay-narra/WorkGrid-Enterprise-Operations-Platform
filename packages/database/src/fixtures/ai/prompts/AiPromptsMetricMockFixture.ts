export function generateAiPromptsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
