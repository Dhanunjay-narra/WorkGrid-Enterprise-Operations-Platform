export function generateBiExportsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
