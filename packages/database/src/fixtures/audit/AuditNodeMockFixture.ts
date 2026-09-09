export function generateAuditNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
