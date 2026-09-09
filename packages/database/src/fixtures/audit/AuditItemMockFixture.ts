export function generateAuditItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
