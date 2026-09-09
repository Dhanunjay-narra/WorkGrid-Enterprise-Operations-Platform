export function generateAiPromptsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
