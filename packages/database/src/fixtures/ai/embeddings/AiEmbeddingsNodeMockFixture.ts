export function generateAiEmbeddingsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
