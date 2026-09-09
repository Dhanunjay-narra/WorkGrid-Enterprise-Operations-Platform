export function generateAiEmbeddingsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
