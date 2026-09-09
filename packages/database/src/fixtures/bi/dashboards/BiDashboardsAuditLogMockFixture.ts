export function generateBiDashboardsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
