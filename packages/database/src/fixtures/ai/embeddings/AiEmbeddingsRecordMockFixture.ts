export function generateAiEmbeddingsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
