export function generateAiPromptsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
