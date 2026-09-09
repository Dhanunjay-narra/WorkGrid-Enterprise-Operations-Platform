export function generateCommThreadsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
