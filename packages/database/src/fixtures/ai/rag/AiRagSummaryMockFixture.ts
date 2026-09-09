export function generateAiRagSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
