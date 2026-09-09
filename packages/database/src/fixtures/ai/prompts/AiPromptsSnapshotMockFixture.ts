export function generateAiPromptsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
