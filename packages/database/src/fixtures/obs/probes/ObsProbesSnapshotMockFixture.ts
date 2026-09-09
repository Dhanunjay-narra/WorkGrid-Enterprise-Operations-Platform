export function generateObsProbesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
