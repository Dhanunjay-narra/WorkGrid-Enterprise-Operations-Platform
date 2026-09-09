export function generateObsProfilingSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
