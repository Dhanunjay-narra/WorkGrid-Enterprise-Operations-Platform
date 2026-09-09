export function generateSupportKnowledgeAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
