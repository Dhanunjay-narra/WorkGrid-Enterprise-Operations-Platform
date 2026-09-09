export function generateObsDashboardsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
