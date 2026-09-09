export function generateAiEmbeddingsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
