export function generateAiRagReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
