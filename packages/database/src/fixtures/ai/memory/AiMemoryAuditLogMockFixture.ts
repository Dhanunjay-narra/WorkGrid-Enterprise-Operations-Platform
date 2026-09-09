export function generateAiMemoryAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
