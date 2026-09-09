export function generateAiPromptsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
