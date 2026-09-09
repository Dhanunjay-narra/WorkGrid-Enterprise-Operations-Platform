export function generateAuditPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
