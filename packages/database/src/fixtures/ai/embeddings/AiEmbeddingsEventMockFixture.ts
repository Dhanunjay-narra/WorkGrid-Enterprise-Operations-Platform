export function generateAiEmbeddingsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
