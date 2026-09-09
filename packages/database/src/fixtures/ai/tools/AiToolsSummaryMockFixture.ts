export function generateAiToolsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
