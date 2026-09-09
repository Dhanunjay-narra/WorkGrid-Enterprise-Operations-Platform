export function generateObsLoggingSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
