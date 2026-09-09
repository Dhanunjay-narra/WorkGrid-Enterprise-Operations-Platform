export function generateAiPromptsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
