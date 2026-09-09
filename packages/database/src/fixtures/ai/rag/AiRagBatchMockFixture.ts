export function generateAiRagBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
