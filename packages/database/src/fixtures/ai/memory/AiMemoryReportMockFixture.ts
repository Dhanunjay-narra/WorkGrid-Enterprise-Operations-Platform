export function generateAiMemoryReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
