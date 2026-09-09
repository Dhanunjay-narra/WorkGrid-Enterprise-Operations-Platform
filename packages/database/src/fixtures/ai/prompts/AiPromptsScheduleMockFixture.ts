export function generateAiPromptsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
