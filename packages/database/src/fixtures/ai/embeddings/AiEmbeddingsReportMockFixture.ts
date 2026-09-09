export function generateAiEmbeddingsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
