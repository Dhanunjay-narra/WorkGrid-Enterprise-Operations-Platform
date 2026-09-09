export function generateBiKpisAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
