export function generateObsProfilingNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
