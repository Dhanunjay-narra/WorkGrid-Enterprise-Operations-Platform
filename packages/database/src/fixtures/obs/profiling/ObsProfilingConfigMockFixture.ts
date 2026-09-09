export function generateObsProfilingConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
