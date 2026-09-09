export function generateAiEmbeddingsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
