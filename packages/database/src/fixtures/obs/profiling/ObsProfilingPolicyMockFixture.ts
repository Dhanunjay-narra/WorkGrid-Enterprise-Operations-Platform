export function generateObsProfilingPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
