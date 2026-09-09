export function generateAiPromptsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
