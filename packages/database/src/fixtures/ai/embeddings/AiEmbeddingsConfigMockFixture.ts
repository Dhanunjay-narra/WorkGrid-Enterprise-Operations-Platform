export function generateAiEmbeddingsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
