export function generateAiPromptsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
