export function generateObsProfilingMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
