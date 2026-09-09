export function generateAiEmbeddingsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
