export function generateSupportAgentsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
