export function generateAiMemoryRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
