export function generateAiEmbeddingsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
