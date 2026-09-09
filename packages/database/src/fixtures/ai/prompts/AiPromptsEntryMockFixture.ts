export function generateAiPromptsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
