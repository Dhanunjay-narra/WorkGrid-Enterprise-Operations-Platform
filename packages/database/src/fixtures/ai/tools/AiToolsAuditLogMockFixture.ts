export function generateAiToolsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
