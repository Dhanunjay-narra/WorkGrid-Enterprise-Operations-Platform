export function generateObsSpansAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
