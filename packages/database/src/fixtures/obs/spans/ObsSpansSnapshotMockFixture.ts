export function generateObsSpansSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
