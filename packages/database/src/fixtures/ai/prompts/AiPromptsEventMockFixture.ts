export function generateAiPromptsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
