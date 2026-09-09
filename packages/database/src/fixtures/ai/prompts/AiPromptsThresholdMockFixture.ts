export function generateAiPromptsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
