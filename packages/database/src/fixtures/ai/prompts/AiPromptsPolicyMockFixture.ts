export function generateAiPromptsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
