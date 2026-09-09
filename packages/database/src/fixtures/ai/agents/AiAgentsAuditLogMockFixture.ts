export function generateAiAgentsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
