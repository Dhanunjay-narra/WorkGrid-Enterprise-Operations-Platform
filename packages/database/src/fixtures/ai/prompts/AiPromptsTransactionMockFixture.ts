export function generateAiPromptsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
