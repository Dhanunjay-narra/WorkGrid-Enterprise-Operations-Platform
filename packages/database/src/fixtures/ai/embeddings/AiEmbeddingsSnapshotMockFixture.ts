export function generateAiEmbeddingsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
