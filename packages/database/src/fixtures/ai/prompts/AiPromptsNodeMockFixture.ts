export function generateAiPromptsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
