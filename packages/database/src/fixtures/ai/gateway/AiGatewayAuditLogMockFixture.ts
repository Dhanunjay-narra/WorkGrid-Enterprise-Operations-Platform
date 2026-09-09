export function generateAiGatewayAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_gateway",
    entity: "AiGatewayAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
