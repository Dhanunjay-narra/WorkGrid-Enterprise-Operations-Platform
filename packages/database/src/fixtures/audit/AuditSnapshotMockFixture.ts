export function generateAuditSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
