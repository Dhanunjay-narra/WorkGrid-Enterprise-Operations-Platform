export function generateAiRagScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
