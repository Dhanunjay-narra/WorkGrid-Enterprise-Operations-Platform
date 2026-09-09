export function generateAiRagTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
