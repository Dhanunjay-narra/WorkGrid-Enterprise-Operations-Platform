export function generateAiPromptsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
