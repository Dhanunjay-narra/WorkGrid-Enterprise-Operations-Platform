export function generateAiMemoryTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
