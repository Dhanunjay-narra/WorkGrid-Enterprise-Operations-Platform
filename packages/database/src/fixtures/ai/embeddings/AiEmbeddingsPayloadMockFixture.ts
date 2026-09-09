export function generateAiEmbeddingsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
