export function generateAiMemorySummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemorySummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
