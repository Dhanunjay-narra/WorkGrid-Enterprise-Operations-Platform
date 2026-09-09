export function generateAiPromptsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
