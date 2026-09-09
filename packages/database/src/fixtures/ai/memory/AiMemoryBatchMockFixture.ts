export function generateAiMemoryBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
