export function generateAiEmbeddingsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
