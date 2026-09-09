export function generateObsProfilingSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
