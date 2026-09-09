export function generateAiEmbeddingsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
