export function generateAiRagAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
