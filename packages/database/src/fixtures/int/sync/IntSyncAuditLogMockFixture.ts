export function generateIntSyncAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
