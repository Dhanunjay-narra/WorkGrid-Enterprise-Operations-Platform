export function generateObsMetricsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
