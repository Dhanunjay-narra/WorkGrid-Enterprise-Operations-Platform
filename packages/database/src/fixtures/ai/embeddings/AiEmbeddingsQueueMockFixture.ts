export function generateAiEmbeddingsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
