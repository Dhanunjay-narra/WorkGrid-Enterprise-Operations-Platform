export function generateAiEmbeddingsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
