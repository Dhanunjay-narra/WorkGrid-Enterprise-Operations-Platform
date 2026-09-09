export function generateObsProfilingAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
