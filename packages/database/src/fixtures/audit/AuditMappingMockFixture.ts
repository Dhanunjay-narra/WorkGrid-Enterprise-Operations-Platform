export function generateAuditMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
