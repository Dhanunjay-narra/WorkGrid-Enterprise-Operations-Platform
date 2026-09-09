export function generateObsProfilingProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
