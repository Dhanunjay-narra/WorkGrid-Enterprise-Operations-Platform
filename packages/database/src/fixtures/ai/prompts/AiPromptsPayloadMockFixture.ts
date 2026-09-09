export function generateAiPromptsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
