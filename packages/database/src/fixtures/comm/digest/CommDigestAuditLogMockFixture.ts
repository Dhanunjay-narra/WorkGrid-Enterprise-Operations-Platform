export function generateCommDigestAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
