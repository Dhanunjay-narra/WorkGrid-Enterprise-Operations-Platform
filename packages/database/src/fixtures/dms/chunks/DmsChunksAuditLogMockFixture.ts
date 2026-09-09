export function generateDmsChunksAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
