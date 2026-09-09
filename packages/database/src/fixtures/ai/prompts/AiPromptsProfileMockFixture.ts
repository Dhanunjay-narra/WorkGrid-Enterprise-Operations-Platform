export function generateAiPromptsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
