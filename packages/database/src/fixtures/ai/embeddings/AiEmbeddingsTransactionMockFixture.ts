export function generateAiEmbeddingsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
