export function generateObsTracingAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
