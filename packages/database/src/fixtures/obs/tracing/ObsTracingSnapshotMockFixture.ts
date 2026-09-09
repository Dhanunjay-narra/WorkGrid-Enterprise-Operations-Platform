export function generateObsTracingSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
