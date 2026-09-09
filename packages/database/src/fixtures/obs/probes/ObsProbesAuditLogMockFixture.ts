export function generateObsProbesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
