export function generateAiEmbeddingsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
