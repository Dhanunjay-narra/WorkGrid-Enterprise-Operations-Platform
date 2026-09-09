export function generateAiEmbeddingsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
