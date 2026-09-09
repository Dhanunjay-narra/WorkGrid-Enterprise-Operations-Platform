export function generateObsProfilingRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
