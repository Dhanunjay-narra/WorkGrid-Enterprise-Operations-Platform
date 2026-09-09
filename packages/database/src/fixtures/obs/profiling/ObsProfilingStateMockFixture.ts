export function generateObsProfilingStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
