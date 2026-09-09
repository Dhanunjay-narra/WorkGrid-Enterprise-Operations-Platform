export function generateObsAlertsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
