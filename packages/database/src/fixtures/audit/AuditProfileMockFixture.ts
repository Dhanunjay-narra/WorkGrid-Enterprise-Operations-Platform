export function generateAuditProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
