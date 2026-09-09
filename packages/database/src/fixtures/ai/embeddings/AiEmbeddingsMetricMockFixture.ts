export function generateAiEmbeddingsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
