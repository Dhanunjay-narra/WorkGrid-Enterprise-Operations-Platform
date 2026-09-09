export function generateAiEmbeddingsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
