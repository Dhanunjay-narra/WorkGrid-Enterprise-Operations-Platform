export function generateAiPromptsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
