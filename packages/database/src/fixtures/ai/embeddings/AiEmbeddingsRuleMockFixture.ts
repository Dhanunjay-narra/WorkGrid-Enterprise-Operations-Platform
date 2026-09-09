export function generateAiEmbeddingsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
