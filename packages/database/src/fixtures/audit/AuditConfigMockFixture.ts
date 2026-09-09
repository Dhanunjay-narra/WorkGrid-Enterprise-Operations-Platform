export function generateAuditConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
