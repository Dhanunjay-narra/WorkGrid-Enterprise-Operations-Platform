export function generateAiEmbeddingsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_embeddings",
    entity: "AiEmbeddingsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
