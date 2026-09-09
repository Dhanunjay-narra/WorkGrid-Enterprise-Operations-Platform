export function generateAiPromptsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
