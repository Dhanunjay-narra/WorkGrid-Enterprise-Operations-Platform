export function generateAiEmbeddingsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
