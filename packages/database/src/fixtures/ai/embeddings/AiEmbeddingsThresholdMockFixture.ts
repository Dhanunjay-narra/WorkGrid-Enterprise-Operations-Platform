export function generateAiEmbeddingsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
