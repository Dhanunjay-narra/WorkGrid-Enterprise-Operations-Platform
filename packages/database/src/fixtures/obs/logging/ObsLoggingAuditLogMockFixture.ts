export function generateObsLoggingAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
