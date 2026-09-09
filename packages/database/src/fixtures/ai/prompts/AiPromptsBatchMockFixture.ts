export function generateAiPromptsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
